'use strict';

/**
 * my-libraray service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-libraray.my-libraray');
