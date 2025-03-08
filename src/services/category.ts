/**
 * 分类接口
 */

export interface ICategory {
  id: number;
  domain: string;
  key: string;
  name: string;
  icon?: string;
  parent?: number;
}


// const mockData = [
//   {
//     key: 'star',
//     name: 'AIGC收藏',
//     icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
//   },
//   {
//     key: 'chat',
//     name: 'AIGC对话'
//   },
//   {
//     key: 'write',
//     name: 'AIGC写作'
//   },
//   {
//     key: 'draw',
//     name: 'AIGC绘画'
//   },
//   {
//     key: 'video',
//     name: 'AIGC视频'
//   },
//   {
//     key: 'audio',
//     name: 'AIGC音频'
//   },
//   {
//     key: 'design',
//     name: 'AIGC设计'
//   },
//   {
//     key: 'work',
//     name: 'AIGC办公'
//   },
//   {
//     key: 'learn',
//     name: 'AIGC学习'
//   },
//   {
//     key: 'agent',
//     name: 'AI 智能体'
//   },
//   {
//     key: 'model',
//     name: 'AI 大模型'
//   },
//   {
//     key: 'code',
//     name: 'AI 编程开发'
//   },
//   {
//     key: 'service',
//     name: 'AI 平台服务'
//   },
//   {
//     key: 'app',
//     name: 'AI 行业应用'
//   },
//   {
//     key: 'tool',
//     name: 'AI 工具插件'
//   },
// ]

export async function queryCategoryByTenantId(models, tenantId) {
  const { data } = await models.nav_category.list({
    filter: {
      where: {
        tenant_id: {
          $eq: tenantId
        }
      }
    },
    select: {
      _id: true,
      name: true,
      icon: true,
      cover: true,
    },
    pageSize: 10, // 分页大小，建议指定，如需设置为其它值，需要和 pageNumber 配合使用，两者同时指定才会生效
    pageNumber: 1, // 第几页
    getCount: true, // 开启用来获取总数
  });

  return data
}

