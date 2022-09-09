# 個人学習 (express, suquelize, mysql を用いた API 作成)

Udemy や書籍等を用いて express の学習をしたので、力試しにシンプルなオリジナルの API を実装します。

ユーザー認証機能 + ポスト投稿ができる簡単な API です。

## 手元で試す手順

## 前提

Node 及び mysql ローカルにあること

1. `git clone`
2. `npm install`
3. `config/config.json`の編集
   DB 名と password を変更してください
4. terminal や GUI ツールを使用して自分が利用したい名前の DB を作成
5. `npx sequelize-cli db:migrate`
6. `npm start && open http://localhost:3000`

get 以外の機能をブラウザで試すことができないので、Postman を使用することを推奨します。

https://www.postman.com/
