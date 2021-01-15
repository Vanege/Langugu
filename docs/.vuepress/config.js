module.exports = {
  title: 'Langugu',
  description: 'Ti openi langugu ki yu alredi knowa',
  base: '/Langugu/',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: 'Kurso', link: '/Kurso/'},
      { text: 'Plibonigoj kompare al Esperanto', link: '/Plibonigoj/'},
      { text: 'Legaĵoj', link: '/Legajxoj/'},
      { text: 'Frazaro', link: 'https://vanege.github.io/conlang-sentence-dictionary/?targetedConlang=Langugu' },
      { text: 'Komunumo', link: 'https://langugu.telegramo.org' },
    ],
    sidebar: {
      '/Kurso/': [
        ['', 'Kurso'] 
      ],
      '/Plibonigoj/': [
        ['', 'Plibonigoj'] 
      ],
      '/Legajxoj/': [
        ['', 'Legaĵoj'] 
      ]
    }
  }
}
