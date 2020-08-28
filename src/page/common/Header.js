import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Dropdown } from 'antd';
import { DownOutlined ,UserOutlined} from '@ant-design/icons';


 class Header extends Component {
  constructor(){
    super()
    this.state={
      activeRoute:'/Index'
    }
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            个人中心
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            设置
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            推出登录
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div style={{background:'#004C97'}}>
        <div className="header flex-between">
          <div className='left'>LOGO</div>
          <div className='right'>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <UserOutlined /> 张三 <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Header);
