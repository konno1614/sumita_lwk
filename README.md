# sample

## 開発

### ディレクトリ構造

```txt
├── public  # ドキュメントルート
└── public-src     # コンパイル前ソース
```

#### html,css,js
`/public-src`内で元ファイルを編集してコンパイル。

#### img,font,etc…
`/static`内で変更・追加。

### ローカル開発

```sh
cd public-src

# 依存ファイルインストール
npm install or yarn install

# 開発
npm start or yarn start

# コンパイル
npm run build or yarn build
```
