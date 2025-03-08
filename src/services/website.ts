
export async function queryWebsite(models, categoryId?: string) {
  const { data } = await models.nav_website.list({
    filter: {
      where: categoryId ? {
        category_id: {
          $eq: categoryId
        }
      } : {}
    },
    // select: {
    //   _id: true,
    //   name: true,
    //   icon: true,
    //   cover: true,
    // },
    pageSize: 100, // 分页大小，建议指定，如需设置为其它值，需要和 pageNumber 配合使用，两者同时指定才会生效
    pageNumber: 1, // 第几页
    getCount: true, // 开启用来获取总数
  });

  return data
}
