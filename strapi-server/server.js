


// const strapi = require('@strapi/strapi');
// const admin = require('./dist/config/admin');
// const api = require('./dist/config/api');
// const database = require('./dist/config/database');
// const middlewares = require('./dist/config/middlewares');
// const plugins = require('./dist/config/plugins');
// const server = require('./dist/config/server');

const strapi = require('@strapi/strapi');
strapi.createStrapi({
  distDir: './dist',
  // config: {
  //   admin: require('./dist/config/admin'),
  //   api: require('./dist/config/api'),
  //   database: require('./dist/config/database'),
  //   middlewares: require('./dist/config/middlewares'),
  //   plugins: require('./dist/config/plugins'),
  //   server: require('./dist/config/server')
  // }
}).start();