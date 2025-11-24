---
  title: "Cloudflare pages に移行した + マイクロブログ作った"
  date: 2025-11-14 23:30:00
  draft: false
---

## やったこと

しばらく放置していたブログとドメインがもったいなくてと思い、

三連休で一気にリニューアルした。

### ブログを移行

 Hugo + GitHub Pages で動かしていたブログを Next.js + Cloudflare Pages に移行。
 
 ついでに放置していた独自ドメイン (krnk.app) も設定した。

### 技術スタック
 - Next.js (Static Export)
 - Cloudflare Pages
 - Tailwind CSS v4

## マイクロブログを作った

https://mb.krnk.app

ブログだと記事を書くのがおっくうなので、
もっと気軽に投稿できる場所が欲しくて作った。

(Xでよくないか、というのはあるけど)

三日坊主になりそう。


### 技術スタック
- バックエンド: Cloudflare Workers + D1
- フロントエンド: Next.js (Cloudflare Pages)
- 認証

### 現状と今後

現状は最低限の投稿機能のみで微妙すぎるのでここらへんはマスト。

- ActivityPub対応
- スマホから投稿しやすく(PWA化とか？)
- 画像投稿
- ページネーション

そのうちぼちぼちやっていく。
