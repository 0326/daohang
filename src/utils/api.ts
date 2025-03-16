import axios from "axios";

const API_HOST = "http://localhost:1337"

const strapi = axios.create({
  baseURL: API_HOST + '/api',
});

export { strapi, API_HOST }
