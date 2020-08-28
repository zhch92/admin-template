import React, { Component } from 'react'
import { Menu,Button} from 'antd';
import {AppstoreOutlined,PieChartOutlined,DesktopOutlined,ContainerOutlined,MailOutlined} from '@ant-design/icons';
const { SubMenu } = Menu;
export default class BroadSide extends Component {
  constructor(){
    super()
    this.state={
      collapsed:false
    }
  }
  tollgeCollapsed(){
    this.props.tollgeCollapsed()
  }
  render() {
    return (
      <div className='broad-side' style={{width:this.props.collapsed?'80px':'200px'}}>
        <div style={{height:'53px',background:'#004c97'}}>
         <Button onClick={this.tollgeCollapsed.bind(this)} type='link'>{this.props.collapsed?'展开':'收起'}</Button>
        </div>
        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={this.props.collapsed}>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            首页 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            首页 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="二级菜单">
            <Menu.Item key="5">二级菜单-5</Menu.Item>
            <Menu.Item key="6">二级菜单-6</Menu.Item>
            <Menu.Item key="7">二级菜单-7</Menu.Item>
            <Menu.Item key="8">二级菜单-8</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
