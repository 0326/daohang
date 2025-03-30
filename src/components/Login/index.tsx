import React, { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { useAppStore } from '../../stores/strapi';
import { post } from '../../utils/api';
import './index.less'

const LoginModal: React.FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { login } = useAppStore();

  const modalInfo = {
    title: isRegister ? '注册' : '登录',
    submitText: isRegister ? '注册' : '登录',
    switchText: isRegister ? '已有账号，去登录' : '没有账号，去注册',
  }


  const handleSubmit = (v) => {
    if (isRegister) {
      handleRegister(v);
    } else {
      handleLogin(v);
    }
  }

  const handleLogin = async (values: { username: string; password: string }) => {
    setLoading(true);
    console.log('Login values:', values);
    const userInfo = await login(values.username, values.password);
    if (userInfo?.id) {
      messageApi.open({
        type: 'success',
        content: '登录成功',
      })
      location.reload();
      onClose();
    } else {
      messageApi.open({
        type: 'error',
        content: '登录失败，账号或密码错误',
      })
    }
    setLoading(false);
  };

  const handleRegister = async (values: { username: string, email: string, password: string }) => {
    setLoading(true);
    console.log('Register values:', values);
    try {
      const res = await post('/auth/local/register', {
        username: values.username,
        email: values.email,
        password: values.password
      });
      console.log('Register res:', res);
      if (res?.data?.jwt) {
        login('', '', res.data);
      }
      setLoading(false);
      onClose()
    } catch (error) {
      console.error('Register error:', error);
      messageApi.open({
        type: 'error',
        content: '注册失败, 请检查用户名或邮箱是否已被注册',
      })
      setLoading(false);
    }
  };

  return (
    <Modal
      title={modalInfo.title}
      visible={visible}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <Form onFinish={handleSubmit} layout="vertical">
        {isRegister ? (
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
        ) : (
          <Form.Item
            label="登录账号"
            name="username"
            rules={[{ required: true, message: '请输入登录邮箱' }]}
          >
            <Input placeholder="请输入登录邮箱" />
          </Form.Item>
        )}
        {isRegister ? (
          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, message: '请输入邮箱' }]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>
        ) : null}
        <Form.Item
          label="密码"
          name="password"
          rules={[
            () => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject(new Error('请输入密码!'));
                }
                if (isRegister && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
                  return Promise.reject(new Error('密码必须至少8位，包含大小写字母和数字!'));
                }
                return Promise.resolve();
              },
            })
          ]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>
        {isRegister ? <Form.Item
          label="确认密码"
          name="password2"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject(new Error('请确认密码!'));
                }
                if (getFieldValue('password') !== value) {
                  return Promise.reject(new Error('两次密码不一致!'));
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input.Password placeholder="请确认密码" />
        </Form.Item> : null}
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            {modalInfo.submitText}
          </Button>
        </Form.Item>
      </Form>
      <p className="login-modal-switch-info" onClick={() => { setIsRegister(!isRegister) }}>{modalInfo.switchText}</p>
      {contextHolder}
    </Modal>
  );
};

export default LoginModal;