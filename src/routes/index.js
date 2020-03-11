const { SwaggerRouter } = require('koa-swagger-decorator');

const router = new SwaggerRouter();
// router.use('/api', ApiRouter.routes());

// swagger docs avaliable at http://localhost:3000/swagger-html
router.swagger({
  title: 'MDV Fermata',
  description: 'MDV Fermata API documentation',
  version: '0.1.0',
});
router.mapDir(__dirname + '/api');

module.exports = router;
