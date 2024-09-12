const path = require('path');
const config = require('./common');

config.host = '';

config.cdnPayRootMap = {
    zh: config.host,
    en: ''
};
config.cdnFreeRootMap = {
    zh: config.host,
    en: config.host
};

config.galleryPath = '/examples/';
config.releaseDestDir = path.resolve(__dirname, '../../echarts-website');

module.exports = config;
