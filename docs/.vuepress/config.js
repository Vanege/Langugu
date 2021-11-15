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
      { text: 'Demandejo', link: '/Demandejo/'},
      { text: 'Frazaro', link: 'https://conlang-corpora.vercel.app/?l1=Esperanto&l2=Langugu' },
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
      ],
      '/Demandejo/': [
        ['', 'Demandejo'] 
      ]
    }
  }
}
