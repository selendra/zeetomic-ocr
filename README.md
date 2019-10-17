### ZEETOMIC OCR
Zeetomic Object Character Recognition (ZOCR) is a API server run on koajs and OCR at background.

ZOCR pack as container wich is ready for deployment.

### How to use API
Download or clone the source code from this reposity and make sure the local machine install docker.

Go to directory and start the docker compose

`$docker-compose up`

when the terminal occure 

`OCR Server started at 9002` 

The the ZOCR Start successfully

`curl --request POST \
  --url http://localhost:9002/pushimage \
  --header 'content-type: application/json' \
  --data '{"imguri":"https://i.ibb.co/r69pMmx/ocr.png",
 "amount":"Grand Total($)", 
 "trxdate":"Bill Date"}' `

Expected result should display like below

 `{
  "data": {
    "idx": 11,
    "trxdate": "Bill Date: 15/08/19 03:52 pm",
    "amount": "Grand Total($) 7.70"
  }
}`