# markup

## 開発

### ディレクトリ構造

```txt
├── public  # ドキュメントルート
└── public-src     # コンパイル前ソース
```

#### html,css,js,img
`/public-src`内で元ファイルを編集してコンパイル。

### ローカル開発

```sh
cd public-src

# 依存ファイルインストール
npm install

# 開発
npm start

# コンパイル
npm run build
```
