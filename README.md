## 開発を始める
`npm install`

## 開発する（./dest作成）
`npm start`
ブラウザで `0.0.0.0:8000/` を開く

## リリースする（./destの中身をコピーしてaliceフォルダ直下に移動させる）
masterブランチで `npm run build`

##github pages作成手順
###developbranchをmasterbranchへマージ
    * developでnewpullrequestを作成
    * masterにmerge先が当てはまっているか確認する
    * confirm ~ をクリック
    * developbranchは削除しない

###masterbranchをpull

###npm run buildをする
    * './dest,'./index.html'etc全て上書きされるので削除しない

###ブラウザで確認

##.gitignoreにはgithubで管理していないものが記載されている

##作業単位でこまめにコミットする
