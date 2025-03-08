// import cloudbase from "@cloudbase/js-sdk";

export async function queryTenant(models, domain?: string) {
  const { data } = await models.nav_tenant.get({
    filter: {
      where: {
        domain: {
          $eq: domain,
        },
      }
    },
    select: {
      _id: true,
      name: true,
      logo: true,
      domain: true,
    }
  });

  return data;
}
