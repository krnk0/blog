const typography = require('@tailwindcss/typography')

module.exports = {
  darkMode: 'class',
  plugins: [typography],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // 段落の上下マージンを狭める
            p: { marginTop: '0.6em', marginBottom: '0.6em' },
            // h1のboldを解除
            h1: { fontWeight: 'normal' },
            // 見出しをぎゅっと & 下線削除
            'h2,h3,h4': {
              marginTop: '1.4em',
              marginBottom: '0.4em',
              fontWeight: 'normal',
              borderBottomWidth: '0',
              paddingBottom: '0',
            },
            // リストの間隔
            'ul,ol': { marginTop: '0.4em', marginBottom: '0.4em' },
            // コードブロックのパディング
            'pre code': { padding: '0', lineHeight: '1.4' },
          },
        },
      },
    },
  },
}
