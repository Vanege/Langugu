module.exports = {
  title: 'Langugu',
  description: 'Ti mosti simpli langugu foro ti averagi humanu',
  base: '/Langugu/',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: 'Gramatiko', link: '/' },
      { text: 'Korektilo', link: 'https://langugi-korekteru.herokuapp.com' },
      { text: 'Korpuso', link: 'https://github.com/Vanege/Langugu' },
      { text: 'Komunumo', link: 'https://langugu.telegramo.org' },
    ],
    sidebar: [
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
