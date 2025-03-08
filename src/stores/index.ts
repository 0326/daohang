import { create } from 'zustand'
import { initCloudbase, queryTenant, queryCategoryByTenantId, queryWebsite } from '../services'

export type UserType = {
  _id: string
  username: string
  avatar: string
  email: string
}

export type TenantType = {
  _id: string
  name: string
  logo: string
  domain: string
}

export type CategoryType = {
  _id: string
  name: string
  cover?: string
  icon?: string
}

export type WebsiteType = {
  _id: string
  name: string
  cover: string
  favicon: string
  description: string
  url: string
}

type State = {
  user?: UserType,
  tenant?: TenantType,
  db?: any,
  category?: Array<CategoryType>
  website?: Array<WebsiteType>
}

type Action = {
  login: () => void
  logout: () => void
  initDb: (env?: string) => void
  setTenant: (domain?: string) => Promise<TenantType>
  setCategory: (tenantId: string) => Promise<Array<CategoryType>>
  getWebsite: (categoryId?: string) => Promise<WebsiteType[]>
}

export const useAppStore = create<State & Action>((set, get) => ({
  user: undefined,
  db: undefined,
  tenant: undefined,
  category: undefined,
  website: undefined,
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
  initDb: async (env?: string) => {
    const db = await initCloudbase(env);
    set(() => ({ db }))
  },
  setTenant: async (domain) => {
    const data = await queryTenant(get().db, domain)
    set(() => ({ tenant: data }))
    return data
  },
  setCategory: async (tenantId) => {
    const data = await queryCategoryByTenantId(get().db, tenantId)
    console.log('setCategory', data)
    set(() => ({ category: data.records }))
    return data
  },
  getWebsite: async (categoryId?: string) => {
    const data = await queryWebsite(get().db, categoryId)
    console.log('getWebsite', data)
    set(() => ({ website: data.records }))
    return data.records
  }
}))
