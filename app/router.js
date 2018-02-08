'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/*', controller.home.index);
  router.post('/*', controller.home.index);
  router.head('/*', controller.home.index);
  router.options('/*', controller.home.index);
  router.put('/*', controller.home.index);
  router.patch('/*', controller.home.index);
  router.del('/*', controller.home.index);
  router.redirect('/*', controller.home.index);
};
