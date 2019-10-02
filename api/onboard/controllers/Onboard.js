'use strict';

/**
 * Onboard.js controller
 *
 * @description: A set of functions called "actions" for managing `Onboard`.
 */

module.exports = {

  /**
   * Retrieve onboard records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.onboard.search(ctx.query);
    } else {
      return strapi.services.onboard.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a onboard record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.onboard.fetch(ctx.params);
  },

  /**
   * Count onboard records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.onboard.count(ctx.query);
  },

  /**
   * Create a/an onboard record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.onboard.add(ctx.request.body);
  },

  /**
   * Update a/an onboard record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.onboard.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an onboard record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.onboard.remove(ctx.params);
  }
};
