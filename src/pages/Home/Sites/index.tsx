import React from 'react';
import { List, Avatar, Typography, Modal, Form, Input, Button, message } from 'antd';
import './index.less'
import { post } from '../../../utils/api';
import { FavoriteType } from '../../../type';
import { useAppStore } from '../../../stores/strapi';

interface SitesProps {
  data?: FavoriteType[];
  showAdd?: boolean;
}

const isValidImageUrl = async (url: string): Promise<boolean | undefined> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok && response.headers.get('content-type')?.startsWith('image/');
  } catch {
    return false;
  }
};

const Sites: React.FC<SitesProps> = ({ data = [], showAdd }) => {
  const [form] = Form.useForm();
  const { getFavorites, favorites, user } = useAppStore()
  const [messageApi, contextHolder] = message.useMessage();

  const dataSource = showAdd ?
    [...data, { name: '添加新网站', url: '#add', icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' }]
     : data;

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);


  const onSubmit = async () => {
    try {
      setLoading(true);
      const data = await form.validateFields();
      if (!data.icon) {
        if (!data.url.startsWith('http://') && !data.url.startsWith('https://')) {
          data.url = 'https://' + data.url;
        }
        const icon = data.url + '/favicon.ico';

        const isValidIcon = await isValidImageUrl(icon);
        if (isValidIcon) {
          data.icon = icon;
        }
      }
      if (!user?.documentId) {
        messageApi.open({
          type: 'warning',
          content: '请先登录',
        });
        setLoading(false);
        return
      }

      if (favorites?.find((item) => item.url === data.url)) {
        messageApi.open({
          type: 'warning',
          content: '该网站已添加，无需重复添加',
        });
        setLoading(false);
        return
      }

      data.userId = user.documentId;
      const res = await post('/favorites', { data });
      console.log('onSubmit', res);
      setLoading(false);
      setShowAddModal(false)
      getFavorites()
      console.log('onSubmit', data);
    } catch (errorInfo) {
      setLoading(false);
      console.log('onSubmit error', errorInfo);
    }
  }
  return (
    <>
      {contextHolder}
      <List
        grid={{ gutter: 8, column: 10, sm: 5, md: 6, lg: 8, xl: 10 }}
        dataSource={dataSource}
        className='site-list-component'
        locale={{ emptyText: ' ' }}
        renderItem={item => (
          <List.Item>
            <div className="site-list-item" onClick={() => {
              if (item.url === '#add') {
                setShowAddModal(true);
                return
              }
              window.open(item.url, '_blank')
            }}>
              <div className="site-avatar">
                <Avatar src={item.icon} size={48} />
              </div>
              <div className="site-title">
                <Typography.Text title={item.name} ellipsis>{item.name}</Typography.Text>
              </div>
            </div>
          </List.Item>
        )}
      />
      <Modal
        title="添加新站点"
        visible={showAddModal}
        footer={null}
        onCancel={() => setShowAddModal(false)}
      >
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600, margin: '0 auto' }}
          initialValues={{ remember: true }}
          // layout="vertical"
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          // autoComplete="off"
        >
          <Form.Item
            label="网站名称"
            name="name"
            rules={[{ required: true, message: '请输入网站名称!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="网站地址"
            name="url"
            rules={[
              () => ({
                validator(_, value) {
                  const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
                  if (!value) {
                    return Promise.reject(new Error('请输入网站地址!'));
                  }
                  if (!urlRegex.test(value)) {
                    return Promise.reject(new Error('请输入有效的网址!'));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="网站图标"
            name="icon"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="网站分类"
            name="category"
          >
            <Input />
          </Form.Item>

          <Form.Item label={null}>
            <Button loading={loading} onClick={onSubmit} type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Sites;