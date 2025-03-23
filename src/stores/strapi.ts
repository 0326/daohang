import { create } from 'zustand'
import qs from 'qs'
import { strapi, API_HOST } from '../utils/api'
import { CategoryType, TenantType, UserType, WebsiteType } from '../type'

type State = {
  user?: UserType,
  tenant?: TenantType,
  // db?: Strapi,
  categories?: Array<CategoryType>
  websites?: Array<WebsiteType>
}

type Action = {
  login: () => void
  logout: () => void
  initDb: (env?: string) => void
  initTenant: (domain?: string) => void
  getWebsites: (categoryId?: string) => Promise<WebsiteType[]>
}

export const useAppStore = create<State & Action>((set, get) => ({
  user: undefined,
  db: undefined,
  tenant: undefined,
  categories: undefined,
  websites: undefined,
  login: () => {
    set(() => ({ user: {
      id: 'B1B5XLCDS8',
      username: 'testuser',
      avatar: {
        fullUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
      email: 'testuser@qq.com'
    } }))
  },
  logout: () => {
    set(() => ({ user: undefined }))
  },
  initDb: async () => {
    // debugger
    // const api = strapi({ baseURL: baseURL || 'http://localhost:1337/api' });
    // set(() => ({ db: api }))
  },
  initTenant: async (domain) => {
    const query = qs.stringify({
      filters: {
        domain: {
          $eq: domain
        }
      },
      fields: ['name', 'domain'],
      populate: {
        logo: {
          fields: ['url', 'formats']
        },
        categories: {
          fields: ['name', 'slug'],
          populate: {
            icon: {
              fields: ['url', 'formats']
            }
          }
        }
      }
    })
    try {
      const { data: { data } }  = await strapi.get(`/tenants?${query}`)
      console.log('data==', data)
      const { categories, logo, documentId, id, name } = data[0]
      set(() => ({ tenant: { name, id, logo: API_HOST + logo.url, documentId } }));

      const cts = categories?.map(({ icon, ...rest }) => {
        return {
          ...rest,
          icon: icon ? API_HOST + icon.formats.small.url : undefined
        }
      })
      set(() => ({ categories: cts }))
    } catch (error) {
      console.error('initTenant error:', error)
    }

    // const data = await queryTenant(get().db, domain)
    // set(() => ({ tenant: data }))
    // return data
  },
  // setCategory: async (tenantId) => {
    // const data = await queryCategoryByTenantId(get().db, tenantId)
    // console.log('setCategory', data)
    // set(() => ({ category: data.records }))
    // return data
  // },
  getWebsites: async (categoryId?: string) => {
    const query = qs.stringify({
      populate: {
        websites: {
          fields: ['name', 'description', 'url'],
          populate: {
            cover: {
              fields: ['url', 'formats']
            },
            favicon: {
              fields: ['url', 'formats']
            }
          }
        }
      }
    });
    try {
      const { data: { data }} = await strapi.get(`/categories/${categoryId}?${query}`)
      const websites = data.websites;
      set(() => ({ websites }))
    } catch (error) {
      console.error('getWebsites error:', error)
    }
    // console.log('getWebsite', data)
    // set(() => ({ website: data.records }))
    // return data.records
  }
}))
