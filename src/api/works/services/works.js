'use strict';

/**
 * works service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::works.works');
