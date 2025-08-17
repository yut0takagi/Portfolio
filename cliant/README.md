# Yuto Takagi – Portfolio

React + Tailwind CSS で構築したポートフォリオサイトです。Vanta.js を用いたアニメーション背景、プロジェクト一覧、自己紹介、コンタクトを掲載しています。

## 技術スタック

- React (CRA)
- Tailwind CSS
- Framer Motion
- Vanta.js (Three.js)

## セットアップ

```
npm install
npm start
```

http://localhost:3000 で確認できます。

## ビルド

```
npm run build
```

`build/` に最適化された成果物が出力されます。

## 構成

- `src/components/` ヒーロー、プロジェクト、アバウト、コンタクト、ヘッダー/フッター
- `src/data/projects.json` プロジェクトのメタ情報
- `src/components/Timeline.jsx` + `src/data/timeline.json` 経歴タイムライン

## 改善点（このリビジョン）

- Vanta.js の遅延読み込みと `prefers-reduced-motion` 対応で初期表示を高速化
- 画像の `loading="lazy"`、リンクに `aria-label` 付与などアクセシビリティ改善
- ナビゲーション（ヘッダー/フッター）とスキップリンク追加、スムーススクロール
- OGP/Twitter カード、構造化データの追加、メタ情報の整備
- `projects.json` の表記ゆれ/タイポ修正
 - NotebookLM音声の再生ボタン追加（`AudioOverview`）。`public/assets/overview.mp3` が存在すればそれを再生、なければブラウザの Web Speech API で読み上げ。

## ルーティング

- `/` ホーム（ヒーロー、Projects、About、Contact）
- `/projects/:id` 各プロジェクトの詳細ページ（外部リンク、画像、Tech タグ）

## 経歴タイムラインの編集

`src/data/timeline.json` を編集して、年月・タイトル・説明・関連リンクを追加/更新してください。
例:

```
[
  {
    "date": "2023-04",
    "title": "大学入学",
    "description": "学科名や研究テーマの概要",
    "links": [{ "label": "関連プロジェクト", "url": "https://..." }]
  }
]
```

## NotebookLM の音声を再生する

- NotebookLM の Audio Overview などで生成した音声ファイル（例: `overview.mp3`）を `cliant/public/assets/overview.mp3` として配置してください。
- 配置されている場合は、ホームのヒーローにある「再生」ボタンでその音声を再生します。
- 配置されていない場合は、ブラウザの Web Speech API による読み上げに自動でフォールバックします（対応ブラウザのみ）。

## ライセンス

このリポジトリのコンテンツの著作権は制作者に帰属します。
