const Koa = require('koa');
const koaSwagger = require('koa2-swagger-ui');

const app = new Koa();

app.use(
  koaSwagger({
    routePrefix: '/doc', // host at /swagger instead of default /docs
    swaggerOptions: {
        urls: [
          {
            url: 'http://petstore.swagger.io/v2/swagger.json',
            name: 'OCR RECEPT'
          },
          {
            url: 'http://petstore.swagger.io/v2/swagger.json',
            name: 'Spec2'
          }
        ]
      }
  }),
);

app.listen(3000);