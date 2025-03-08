import {
  // ChromeFilled,
  CrownFilled,
  SmileFilled,
  // TabletFilled,
} from '@ant-design/icons';
import reactLogo from '../../assets/logo.png'

// const categoryRoutes = [
//   {
//     key: 'star',
//     name: 'AIGC收藏',
//     icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
//   },
//   {
//     key: 'chat',
//     name: 'AIGC对话',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'write',
//     name: 'AIGC写作',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'draw',
//     name: 'AIGC绘画',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'video',
//     name: 'AIGC视频',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'audio',
//     name: 'AIGC音频',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'design',
//     name: 'AIGC设计',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'work',
//     name: 'AIGC办公',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'learn',
//     name: 'AIGC学习',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'agent',
//     name: 'AI 智能体',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'model',
//     name: 'AI 大模型',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'code',
//     name: 'AI 编程开发',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'service',
//     name: 'AI 平台服务',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'app',
//     name: 'AI 行业应用',
//     icon: <CrownFilled />,
//   },
//   {
//     key: 'tool',
//     name: 'AI 工具插件',
//     icon: <CrownFilled />,
//   },
// ]

const appList = [
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    title: 'Ant Design',
    desc: '杭州市较知名的 UI 设计语言',
    url: 'https://ant.design',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
    title: 'AntV',
    desc: '蚂蚁集团全新一代数据可视化解决方案',
    url: 'https://antv.vision/',
    target: '_blank',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    title: 'Pro Components',
    desc: '专业级 UI 组件库',
    url: 'https://procomponents.ant.design/',
  },
  {
    icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
    title: 'umi',
    desc: '插件化的企业级前端应用框架。',
    url: 'https://umijs.org/zh-CN/docs',
  },

  {
    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
    title: 'qiankun',
    desc: '可能是你见过最完善的微前端解决方案🧐',
    url: 'https://qiankun.umijs.org/',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
    title: '语雀',
    desc: '知识创作与分享工具',
    url: 'https://www.yuque.com/',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
    title: 'Kitchen ',
    desc: 'Sketch 工具集',
    url: 'https://kitchen.alipay.com/',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
    title: 'dumi',
    desc: '为组件开发场景而生的文档工具',
    url: 'https://d.umijs.org/zh-CN',
  },
]

export function getLayoutConfig (categoryRoutes) {
  return {
    title: '',
    logo: <img src={reactLogo} alt="logo" />,
    route: {
      path: '/',
      routes: [
        {
          path: '/home',
          name: '我的主页',
          icon: <SmileFilled />,
        },
        {
          path: '/category',
          name: '导航分类',
          icon: <CrownFilled />,
          // access: 'canAdmin',
          // component: './Admin',
          routes: categoryRoutes?.map((item) => ({ path: `/category/${item._id}`, ...item })),
        },
        // {
        //   name: '列表页',
        //   icon: <TabletFilled />,
        //   path: '/list',
        //   component: './ListTableList',
        //   routes: [
        //     {
        //       path: '/list/sub-page',
        //       name: '列表页面',
        //       icon: <CrownFilled />,
        //       routes: [
        //         {
        //           path: 'sub-sub-page1',
        //           name: '一一级列表页面',
        //           icon: <CrownFilled />,
        //           component: './Welcome',
        //         },
        //         {
        //           path: 'sub-sub-page2',
        //           name: '一二级列表页面',
        //           icon: <CrownFilled />,
        //           component: './Welcome',
        //         },
        //         {
        //           path: 'sub-sub-page3',
        //           name: '一三级列表页面',
        //           icon: <CrownFilled />,
        //           component: './Welcome',
        //         },
        //       ],
        //     },
        //     {
        //       path: '/list/sub-page2',
        //       name: '二级列表页面',
        //       icon: <CrownFilled />,
        //       component: './Welcome',
        //     },
        //     {
        //       path: '/list/sub-page3',
        //       name: '三级列表页面',
        //       icon: <CrownFilled />,
        //       component: './Welcome',
        //     },
        //   ],
        // },
        // {
        //   path: 'https://ant.design',
        //   name: 'Ant Design 官网外链',
        //   icon: <ChromeFilled />,
        // },
      ],
    },
    appList,
  };
}
