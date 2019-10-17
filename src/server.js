const Koa = require("koa");
const _ = require("koa-route");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const json = require("koa-json");
const koaBody = require("koa-body");
const ocr = require("../src/ocr/ocr");

const App = new Koa();
App.use(
  cors({ origin: "https://app.zeetomic.com" || "http://localhost:3000" })
);
App.use(bodyParser());

App.use(json());
App.use(_.post("/pushimage", ocr.ocr));
  
App.listen(9002);
console.log(`S3 Server started at 9002`);
  