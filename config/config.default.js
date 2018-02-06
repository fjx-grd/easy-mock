'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1517915809495_2473';

  // add your config here
  config.middleware = [];


  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.json': 'nunjucks'
    },
  };

  return config;
};
