import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/XTable2',
          component: './XTable2',
        },
        {
          path: '/XTable3',
          component: './XTable3',
        },
        {
          path: '/XTable4',
          component: './XTable4',
        },
        {
          path: '/XTable5',
          component: './XTable5',
        },
        {
          path: '/XTable',
          component: './XTable',
        },
        {
          path: '/DragListTest',
          component: './DragListTest',
        },
        {
          path: '/CellDesigner',
          component: './CellDesigner',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'WorkFlowDesigner',
        dll: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
export default config;
