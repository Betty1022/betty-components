import AsyncComponent from '../components/AsyncComponent';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/menu1',
    exact: true,
    component: AsyncComponent(() => import(/* webpackChunkName: "Home" */ '../components/Home'))
  },
  {
    path: '/menu2',
    exact: true,
    component: AsyncComponent(() => import(/* webpackChunkName: "Menu2" */ '../components/Menu2'))
  }
];