import axios from "axios";
import { MediaType } from "../type";

const API_HOST = "http://localhost:1337"

const strapi = axios.create({
  baseURL: API_HOST + '/api',
});

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

export { strapi, getMediaUrl, API_HOST }
