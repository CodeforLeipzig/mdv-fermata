const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const config = require('./config');
const router = require('./routes/index');

const app = new Koa();

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port, () => {
  console.log(`App is listening on ${config.port}.`);
});
