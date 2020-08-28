import React, { Component } from 'react'
import { Form, Input, Button,Radio } from 'antd';
import {storageManager} from '../tool/cache.js'
import store from '../store/store.js'
import {userToggleToken} from '../store/actions/user.js'
export default class Login extends Component {
  onFinish(values){
    storageManager.setStorage('token',values.name)
    storageManager.setStorage('userInfo',values.name)
    store.dispatch(userToggleToken(values.name));
    this.props.history.replace('/Index')
  }
  onFinishFailed(errorInfo)  {
    console.log('Failed:', errorInfo);
  }
  render() {
    return (
      <div className="login-bg">
        <div className='login-box'>
        <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish.bind(this)}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label=""
          name="username"
          rules={[
            {
              required: true,
              message: '请输入账号',
            },
          ]}
        >
          <Input prefix="账号" />
        </Form.Item>
        <Form.Item
          label=""
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input.Password prefix="密码" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{width:'100%'}}>
            登录
          </Button>
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
        <Radio>记住密码</Radio>
      </Form.Item>
      </Form>
        </div>
      </div>
    )
  }
}




