'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.keys = "dsfdsfds"
  // view engine
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'egg-sequelize-doc-default',
  };

  return config;
};
