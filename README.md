# fib_api
指定したn番目のフィボナッチ数を返すREST API
## 概要
* ルートディレクトリのapp.jsはローカル実行用
* fib-api-projectフォルダはデプロイ用。(serverless frameworkでLambdaにデプロイ)
* testフォルダにテストを配置。ローカル実行用

## test case
APIエンドポイント
~~~
https://n0h5hzs4b3.execute-api.us-east-1.amazonaws.com/fib?n="nの値"
~~~
リクエスト例

https://n0h5hzs4b3.execute-api.us-east-1.amazonaws.com/fib?n=10

