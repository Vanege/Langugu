module.exports = {
  title: 'Langugu',
  description: 'Ti mosti simpli langugu foro ti averagi humanu',
  base: '/Langugu/',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: 'Gramatiko', link: '/Gramatiko/Prezento/' },
      { text: 'Vikio', link: 'https://langugu.fandom.com/wiki/Langugu' },
      { text: 'Korektilo', link: 'https://vanege.github.io/langugi-korekteru/' },
      { text: 'Komunumo', link: 'https://langugu.telegramo.org' },
    ],
    sidebar: {
      '/Gramatiko/': [
        ['Prezento', 'Prezento'],
        ['Literoj kaj sonoj', 'Literoj kaj sonoj'],
        ['Vorto', 'Vorto'],
        ['Substantivo', 'Substantivo (-u)'],
        ['Modifilo', 'Modifilo (-i)'],
        ['Verbo', 'Verbo (-a)'],
        ['Rolvorteto', 'Rolvorteto (-o)'],
        ['Tabelvorto', '"Tabelvorto"'],
        ['Rilata subfrazo', 'Rilata subfrazo'],
        ['Participo', '"Participo"'],
        ['Kunmetado', 'Kunmetado'],
        ['Algoritmo', 'Algoritmo']
      ]
    }
  }
}
