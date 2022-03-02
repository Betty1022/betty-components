import AsyncComponent from '../components/AsyncComponent';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/expand',
    exact: true,
    component: AsyncComponent(() => import(/* webpackChunkName: "DescriptionPage" */ './DescriptionPage'))
  },
  {
    path: '/stepper',
    exact: true,
    component: AsyncComponent(() => import(/* webpackChunkName: "StepperPage" */ './StepperPage'))
  },
  {
    path: '/expandBtnGroup',
    exact: true,
    component: AsyncComponent(() => import(/* webpackChunkName: "ExpandBtnGroupPage" */ './ExpandBtnGroupPage'))
  }
];