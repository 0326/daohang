import { FC } from 'react';
import {
  GithubFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { ProLayout } from '@ant-design/pro-components';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import NavProps from '../../Nav';

const settings: ProSettings | undefined = {
  fixSiderbar: true,
  fixedHeader: true,
  layout: 'mix',
  splitMenus: true,
};


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div
      id="daohang-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...NavProps}
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
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        {children}
      </ProLayout>
    </div>
  );
};

export default Layout;
