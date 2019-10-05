const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  console.log('url=', ctx.url)
  ctx.body = 'path :' + ctx.url
});

if (!module.parent) app.listen(3000);
