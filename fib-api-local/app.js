const express = require('express');
const fibonacci = require('./fibonacci');
const http = require('http')

const app = express();

//文字列を数値として取得。数値でない入力にはfalseを返す
const convertStringToNumber = n => {
    if( typeof n !== "string" || n === "" ) return false;
    const num =  Number( n ); // 数値に変換できない場合はNaNが返る
    return isNaN( num ) ? false : num;
}

//ルートでメッセージを出力
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

//正の整数nを受け取り、n番目のフィボナッチ数を返すAPI
app.get('/fib', (req, res) => {

  //数値でない入力はfalseが代入され、fibonacciでエラーが起きる仕様(要検討)
  const n = convertStringToNumber(req.query.n);
  
  try {
    const fib_result = fibonacci(n);
    //大きい桁数でも扱えるように全て文字列で返す(要検討)
    resValue = fib_result.toString(); 
    res.json({'result':resValue});
  }
   catch (error) {
    res.status(400).json({ 'status': 400, 'message': 'Bad request.' });
  }
});

module.exports = app;
//ローカルポート3000でサーバーを立ち上げ
const webServer = http.createServer(app);
webServer.listen(3000,()=>{
  console.log("server running PORT:"+3000);
  console.log("If you are using app.test.js, please stop this server");
});
