import React, {FC} from 'react';
import {Layout} from 'antd';
import menus from './menu.json';
import {Switch, Route} from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import config from './config';

import './index.less';

const {Content, Sider} = Layout;

type IProps = {};

const Pages: FC<IProps> = () => {
  const renderRoute = (route: any, index: any) => {
    return <Route {...{[['key'][0]]: index}} {...route} />;
  };

  return (
    <Layout className='betty-layout' style={{minHeight: '100vh'}}>
      <Sider>
        <div className='logo' />
        <SideMenu menus={menus} />
      </Sider>
      <Layout className='site-layout'>
        <Content>
          <Switch>
            {config?.map(renderRoute)}
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Pages;