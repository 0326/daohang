import { create } from 'zustand'
import qs from 'qs'
import { strapi, API_HOST } from '../utils/api'

// import { initCloudbase, queryTenant, queryCategoryByTenantId, queryWebsite } from '../services'

export type UserType = {
  _id: string
  username: string
  avatar: string
  email: string
}

export type TenantType = {
  id: string
  name: string
  logo: string
  domain: string
  documentId: string
}

export type CategoryType = {
  id: string
  documentId: string
  name: string
  dir: string
  icon?: string
}

export type WebsiteType = {
  id: string
  name: string
  cover: string
  favicon: string
  description: string
  url: string
}

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
  // setCategory: (tenantId: string) => Promise<Array<CategoryType>>
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
      _id: 'B1B5XLCDS8',
      username: 'testuser',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
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
          fields: ['name', 'dir'],
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
        sites: {
          fields: ['name', 'cover', 'favicon', 'description', 'url']
        }
      }
    });
    try {
      const { data: { data }} = await strapi.get(`/categories/${categoryId}?${query}`)
      const websites = data.sites;
      set(() => ({ websites }))
    } catch (error) {
      console.error('getWebsites error:', error)
    }
    // console.log('getWebsite', data)
    // set(() => ({ website: data.records }))
    // return data.records
  }
}))
