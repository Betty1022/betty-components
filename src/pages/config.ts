import AsyncComponent from '../components/AsyncComponent';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/expand',
    exact: true,
    component: AsyncComponent(() => import(/* webpackChunkName: "Home" */ './DescriptionPage'))
  },
  {
    path: '/stepper',
    exact: true,
    component: AsyncComponent(() => import(/* webpackChunkName: "Menu2" */ './StepperPage'))
  }
];