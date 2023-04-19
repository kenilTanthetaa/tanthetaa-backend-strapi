'use strict';

/**
 * learn-with-us service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learn-with-us.learn-with-us');
