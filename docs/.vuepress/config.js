module.exports = {
  title: 'Langugu',
  description: 'Ti openi langugu ki yu alredi knowa',
  base: '/Langugu/',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: 'Kurso', link: '/Kurso/'},
      { text: 'Plibonigoj kompare al Esperanto', link: '/Plibonigoj/'},
      { text: 'Korektilo (neĝisdata)', link: 'https://vanege.github.io/langugi-korekteru/' },
      { text: 'Vikio (neĝisdata)', link: 'https://langugu.fandom.com/wiki/Langugu' },
      { text: 'Komunumo', link: 'https://langugu.telegramo.org' },
    ],
    sidebar: {
      '/Kurso/': [
        ['', 'Kurso'] 
      ],
      '/Plibonigoj/': [
        ['', 'Plibonigoj'] 
      ]
    }
  }
}
