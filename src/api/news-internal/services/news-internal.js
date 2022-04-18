'use strict';

/**
 * news-internal service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-internal.news-internal');
