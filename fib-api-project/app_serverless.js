//このコードはfib-api-localの"app.js"に対応する

const serverless = require("serverless-http");
const express = require("express");
const app = express();

const fibonacci = require('./fibonacci');

const convertStringToNumber = n => {
  if( typeof n !== "string" || n === "" ) return false;
  const num =  Number( n ); // 数値に変換できない場合はNaNが返る
  return isNaN( num ) ? false : num;
}

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get('/fib', (req, res) => {
  const n = convertStringToNumber(req.query.n);
  try {
    const fib_result = fibonacci(n);
    resValue = fib_result.toString(); //桁数が溢れた時のため文字列に変換(要検討)
    res.json({'result':resValue});
  } catch (error) {
    res.status(400).json({ 'status': 400, 'message': 'Bad request.' });
  }
});

module.exports.handler = serverless(app);
