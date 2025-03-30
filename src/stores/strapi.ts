import { create } from 'zustand'
import qs from 'qs'
import jsCookie from 'js-cookie'
import { post, get as apiGet, API_HOST } from '../utils/api'
import { CategoryType, TenantType, UserType, WebsiteType, FavoriteType } from '../type'


type State = {
  user?: UserType,
  tenant?: TenantType,
  // db?: Strapi,
  categories?: Array<CategoryType>
  websites?: Array<WebsiteType>
  favorites?: Array<FavoriteType>
}

type Action = {
  login: (i: string, p: string, a?: { jwt: string; user: UserType }) => Promise<UserType>
  logout: () => void
  checkLogin: () => boolean
  initDb: (env?: string) => void
  initTenant: (domain?: string) => void
  getWebsites: (categoryId?: string) => Promise<WebsiteType[]>
  getFavorites: () => Promise<FavoriteType[]>
}

export const useAppStore = create<State & Action>((set, get) => ({
  user: undefined,
  db: undefined,
  tenant: undefined,
  categories: [],
  websites: [],
  favorites: [],
  login: async (identifier: string, password: string, registInfo?) => {
    try {
      let user, jwt;
      if (!registInfo) {
        const res = await post('/auth/local', {
          identifier,
          password
        })
        user = res.data.user
        jwt = res.data.jwt
      } else {
        user = registInfo.user
        jwt = registInfo.jwt
      }

      const newUser = {
        documentId: user.documentId,
        email: user.email,
        username: user.username,
        // avatar: {
        //   fullUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        // },
      }
      set(() => ({ user: newUser }))
      jsCookie.set('strapi-jwt', jwt)
      jsCookie.set('strapi-user', JSON.stringify(newUser))
      return user
    } catch (error) {
      console.error('login error:', error)
    }
  },
  checkLogin: () => {
    if (get().user?.documentId) {
      return true
    }
    const jwt = jsCookie.get('strapi-jwt')
    const user = jsCookie.get('strapi-user')
    if (jwt && user) {
      set(() => ({ user: JSON.parse(user) }))
      return true
    }
    return false
  },
  logout: () => {
    jsCookie.remove('strapi-jwt')
    jsCookie.remove('strapi-user')
    set(() => ({ user: undefined }))
    location.reload();
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
      const { data: { data } }  = await apiGet(`/tenants?${query}`)
      console.log('data==', data)
      const { categories, logo, documentId, id, name, domain } = data[0]
      set(() => ({ tenant: { name, id, logo: API_HOST + logo.url, documentId, domain } }));

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
      const { data: { data }} = await apiGet(`/categories/${categoryId}?${query}`)
      const websites = data.websites;
      set(() => ({ websites }))
      return websites;
    } catch (error) {
      console.error('getWebsites error:', error)
    }
    // console.log('getWebsite', data)
    // set(() => ({ website: data.records }))
    // return data.records
  },
  getFavorites: async () => {
    const query = qs.stringify({
      filters: {
        userId: {
          $eq: get().user?.documentId
        }
      },
      populate: {
        fields: ['name', 'url'],
      }
    });
    try {
      const { data: { data }} = await apiGet(`/favorites?${query}`)
      set(() => ({ favorites: data }))
      return data;
    } catch (error) {
      console.error('getFavorites error:', error)
    }
  },
}))
