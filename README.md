# README.md

ようこそ「Road&nbsp;To&nbsp;JS&amp;TS」へ！
このリポジトリは私のJavaScript並びにTypeScriptの練習記録です。

**Welcome to "Road&nbsp;To&nbsp;JS&amp;TS"!**
This repository is my JavaScript and TypeScript practice log.

# サイト要件

## 目的

当サイトはJavaScriptとTypeScriptの写経を通じて言語の実践的な理解を深め、チートシートを制作することで体系化した知識を得ることを目的としています。

## 対象ユーザー

- これからJavaScriptとTypeScriptを学びたいと考えている人
- JavaScriptとTypeScriptを学習中の初心者
- JavaScriptとTypeScriptの知識を整理したい人

# 設計要件

## 設計方針

[CiderTechLabのREADME.md](https://github.com/CiderTechLab/cidertechlab.github.io/blob/main/README.md)に準じます。

### 具体的な実装手段

- JavaScriptとTypeScriptのコードを写経し、実際に動作させることで理解を深める。
- チートシートを作成し、学習した内容を整理する。
- チートシートのレイアウトは生成AI(GitHub Copilot:Claude Haiku)とペアプログラミングを行い、効率的に制作を進める。
- Tailwind CSSも使用し、効率的にデザインを行う。
- エラーが発生したら、原因を生成AIと共に調査した上で解決する。

## 機能要件

- ヘッダー・フッターの設置
- 目次の設置

## 非機能要件

[CiderTechLabのREADME.md](https://github.com/CiderTechLab/cidertechlab.github.io/blob/main/README.md)に準じます。

## ブランチ構成

| ブランチ名 | 用途                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------ |
| main       | 本リポジトリはプログラミング言語学習が目的のため、mainリポジトリのみの構成としております。 |

## ディレクトリ構成

- js
  - 学習に使用した、JavaScriptのソースコードが格納されています。
- ts
  - src
    - 学習に使用した、TypeScriptのソースコードが格納されています。
  - dist
    - TypeScriptからコンパイルされたJavaScriptソースコードが格納されます。
    - 学習目的のため、コンパイル後のコードも確認できるよう格納しております。
- docs
  - GitHub Pages用のプロジェクトサイト（チートシート）の内容が格納されています。

# ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。詳細はLICENSEファイルをご覧ください。

This project is licensed under the MIT License, see the [LICENSE file](LICENSE) for details.
