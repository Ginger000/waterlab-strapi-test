'use strict';

/**
 *  news-internal controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::news-internal.news-internal');
