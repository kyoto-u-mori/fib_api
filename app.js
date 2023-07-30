// app.js

const express = require('express');
const fibonacci = require('./fibonacci');

const app = express();

const convertStringToNumber = n => {
    if( typeof n !== "string" || n === "" ) return false;
    const num =  Number( n ); // 数値に変換できない場合はNaNが返る
    return isNaN( num ) ? false : num;
}

app.get('/fib', (req, res) => {
  const n = convertStringToNumber(req.query.n);
  try {
    const result = fibonacci(n);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ status: 400, message: 'Bad request.' });
  }
});

module.exports = app;