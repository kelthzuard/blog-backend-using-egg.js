'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index)
  router.get('/getArticleList', controller.article.getArticleList)
  router.post('/getKey', controller.getKey.index)
  router.post('/writeArticle', controller.article.writeArticle)
  router.get('/getArticle', controller.article.getArticle)
  router.post('/writeGallery', controller.gallery.writeGallery)
  router.get('/getGalleryList', controller.gallery.getGalleryList)
};
