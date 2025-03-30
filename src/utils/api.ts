import axios from "axios";
import jsCookie from "js-cookie";
import { MediaType } from "../type";

const API_HOST = "http://localhost:1337"

const strapi = axios.create({
  baseURL: API_HOST + '/api',
});

const get = (url: string, config?) => {
  const jwt = jsCookie.get('strapi-jwt');
  const headers = config?.headers || {}
  if (jwt) {
    headers.Authorization = 'Bearer ' + jwt
  }
  return strapi.get(url, {
    ...(config || {}),
    headers,
  })
}

const post = (url: string, data, config?) => {
  const jwt = jsCookie.get('strapi-jwt');
  const headers = config?.headers || {}
  if (jwt) {
    headers.Authorization = 'Bearer ' + jwt
  }
  return strapi.post(url, data, {
    ...(config || {}),
    headers,
  })
}

const getMediaUrl = (m?: MediaType) => {
  const { url, fullUrl } = m || {};
  if (fullUrl) {
    return fullUrl;
  }
  if (url) {
    return API_HOST + url;
  }
  return '';
}

export { strapi, get, post, getMediaUrl, API_HOST }
