'use strict';

/**
 * test-type-1 service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-type-1.test-type-1');
