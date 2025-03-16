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

