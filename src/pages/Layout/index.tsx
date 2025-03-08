import { FC, useEffect, useState } from 'react';
import {
  GithubFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { Skeleton } from 'antd';
import type { ProSettings } from '@ant-design/pro-components';
import { ProLayout } from '@ant-design/pro-components';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getLayoutConfig } from './helper';
import { useAppStore } from '../../stores'

const settings: ProSettings | undefined = {
  fixSiderbar: true,
  fixedHeader: true,
  layout: 'mix',
  splitMenus: true,
};


interface LayoutProps {
  children: React.ReactNode;
}

let isDataReady = false

const Layout: FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { initDb, setTenant, setCategory, category, getWebsite } = useAppStore()
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      const start = performance.now()
      console.log('init data start: ', start)
      await initDb()
      const { _id } = await setTenant('ai')
      await setCategory(_id)
      setLoading(false)
      const end = performance.now()
      console.log(`init data end: ${end}(耗时 ${end - start} ms)`)
    }
    if (!isDataReady) {
      init()
    }

    return () => {
      // 本地开发 useEffect 会执行两次，这里增加标记位确保只请求一次
      // isDataReady = !!location.port
      isDataReady = false
    }
  }, []);

  return (
    <div
      id="daohang-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...getLayoutConfig(category)}
        menu={{
          // defaultOpenAll: true,
          // type: 'sub',
          // loading: true,
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    // marginInlineEnd: 12,
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  }
                  placeholder="搜索导航"
                  variant="borderless"
                />
              </div>
            ) : undefined,
            // <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2025 导航在线</div>
            </div>
          );
        }}
        // onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              console.log('item.path', item.path)
              navigate(item.path || '/');
              getWebsite(item._id)
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        {loading ? <Skeleton active /> : children}
      </ProLayout>
    </div>
  );
};

export default Layout;
