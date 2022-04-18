'use strict';

/**
 * news-internal router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::news-internal.news-internal');
