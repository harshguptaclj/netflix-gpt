const Dotenv = require('dotenv-webpack');

module.exports = function override(config, env) {
  // Add dotenv-webpack plugin
  config.plugins.push(new Dotenv());
  
  return config;
};
