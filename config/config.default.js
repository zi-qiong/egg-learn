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

  config.mongoose = {
    client: {
      url: 'mongodb://localhost/test',
      options: {},
    },
  };

  return config;
};
