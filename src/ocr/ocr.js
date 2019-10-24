const Tesseract = require("tesseract.js");
var request = require("request");
const uuid = require("uuid/v4");
var fs = require("fs");

let url;

var genName = uuid();
var filename = `./temp/${genName}`;

const readPromise = function() {
  return new Promise(function(resolve, reject) {
    var writeFile = fs.createWriteStream(filename);
    request(url)
      .pipe(writeFile)
      .on("close", function() {
        Tesseract.recognize(filename)
          .progress(function(p) {
            console.log("progress", p);
          })
          .catch(err => console.error(err))
          .then(function(result) {
            console.log(result);
            var res = result.text.split("\n");
            resolve(res);
          });
      });
  });
};

exports.ocr = async ctx => {
  // var _amount = ctx.request.body.amount;
  // var _trxdate = ctx.request.body.trxdate;
  url = ctx.request.body.imguri;

  // var _xtAmount;
  const data = await readPromise(url);
  // var lengthOfData = data.length;
  // for (i = 0; i < lengthOfData; i++) {
  //   for (y = 0; y < lengthOfData; y++) {
  //     var rawData = data[y];
  //     if (true == data[y].startsWith(_amount)) {
  //       _xtAmount = rawData;
  //     }
  //   }
  // if (true == data[i].startsWith(_trxdate)) {
  //   var obj = {
  //     idx: i,
  //     trxdate: data[i],
  //     amount: _xtAmount
  //   };
  //   console.log(JSON.stringify(obj));
  //   ctx.status = 200;
  //   ctx.body = { data: obj };
  //   return 0;
  // }
  // }
  console.log(data);
  ctx.status = 200;
  ctx.body = { data: { uuid: genName, content: data } };
  return 0;
};
