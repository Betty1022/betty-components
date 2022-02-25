import React, {FC, useState} from 'react';
import {Layout, Menu} from 'antd';
import Icon, {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import menus from './menu.json';
import './index.less';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

type IProps = {};

const Pages: FC<IProps> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (boolean: any): void => {
    setCollapsed(boolean);
  }

  const RenderMenu = (data: any[]): any => {
    if (data) {
      return data?.map((item: any) => (
        <Menu.Item key={item?.key}>
          <Icon component={item?.icon} />
          {item?.title}
        </Menu.Item>
      ))
    }
  }

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className='logo' />
        <Menu theme='dark'>
          {/* <Menu.Item key='1' icon={<PieChartOutlined />}>
            <i className=''/>
            menu1
          </Menu.Item>
          <Menu.Item key='2' icon={<DesktopOutlined />}>
            menu2
          </Menu.Item> */}
          {RenderMenu(menus)}
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Content>
          123
        </Content>
      </Layout>
    </Layout>
  )
}

export default Pages;