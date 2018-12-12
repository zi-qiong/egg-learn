module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/article', controller.article.index);
  router.get('/article/:id', controller.article.detail);
  router.get('/interview', controller.interview.index);
  router.get('/partner', controller.partner.index);
  router.get('/partner/:id', controller.partner.detail);
};