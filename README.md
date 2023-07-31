# fib_api
**(主にドキュメントとソースコードのコメントについて、現在修正をしております。完了し次第READMEに記載致します。(7/31 9:20))**

指定したn番目のフィボナッチ数を返すREST API
## 概要
### fib-api-local
* ローカル実行用のフォルダ
* fib-api-localにおいてnode app.jsを実行するとhttp://localhost:3000にAPIが作られる
* app.js: APIの設定
* fibonacci.js: 指定したn番目のフィボナッチ数をbigIntで返す関数
* fib-api-local/test/app.test.js: fib-api-localにおいてnpm run testを実行

### fib-api-project
* デプロイ用のフォルダ(serverless frameworkでLambdaにデプロイ)
* 詳しい起動方法はfib-api-projectのREADME(AWSが自動生成したもの)を参照
* app_serverless.jsがlocalのapp.jsに対応

## APIの説明
正の整数を受け取り、文字列型で対応するフィボナッチ数を返す

APIエンドポイント
~~~
https://n0h5hzs4b3.execute-api.us-east-1.amazonaws.com/fib?n="nの値"
~~~
リクエスト例

https://n0h5hzs4b3.execute-api.us-east-1.amazonaws.com/fib?n=10

~~~
curl -X GET -H "Content-Type: applicat
ion/json" "https://n0h5hzs4b3.execute-api.us-east-1.amazonaws.com/fib?n=10"

~~~~