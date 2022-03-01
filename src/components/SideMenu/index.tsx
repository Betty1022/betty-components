import React, {FC} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';

type IProps = {
  menus: any;
}

const SideMenu: FC<IProps> = ({menus}) => {
  const RenderMenu = (data: any[]): any => {
    if (data) {
      return data?.map((item: any) => (
        <Menu.Item key={item?.key}>
          <Link to={item?.path} title={item?.title}>
            {item?.title}
          </Link>
        </Menu.Item>
      ))
    }
  }
  return (
    <Menu theme='dark' defaultSelectedKeys={[menus?.[0]?.key]}>
      {RenderMenu(menus)}
    </Menu>
  )
}

export default SideMenu;