$(document).ready(function() {
  const frutas = [
    {
      nome: 'Maçã',
      foto: 'maca.jpeg',
      especificacoes: 'R$5,00 Kg',
    },
    {
      nome: 'Banana',
      foto: 'banana.jpeg',
      especificacoes: 'R$2,23 Kg',
    },
    {
      nome: 'Laranja',
      foto: 'laranja.jpg',
      especificacoes: 'R$4,00 Kg',
    },
    {
      nome: 'Pera',
      foto: 'pera.jpg',
      especificacoes: '$5,41 Kg'
    },
    {
      nome: 'Uva',
      foto: 'uva.jpg',
      especificacoes: 'R$6,32 Kg'
    },
    {
      nome: 'Mexirica',
      foto: 'mexirica.jpg',
      especificacoes: 'R$2,00 Kg'
    },
    {
      nome: 'Abacaxi',
      foto: 'abacaxi.jpg',
      especificacoes: 'R$3,20 Kg'
    },
    {
      nome: 'Abacate',
      foto: 'abacate.jpg',
      especificacoes: 'R$6,00 Kg'
    },
    {
      nome: 'Kiwi',
      foto: 'kiwi.jpg',
      especificacoes: 'R$19,99 Kg'
    },
    {
      nome: 'Pessego',
      foto: 'pessego.jpg',
      especificacoes: 'R$25,00 Kg'
    },
    {
      nome: 'Melancia',
      foto: 'melancia.jpg',
      especificacoes: 'R$1,60 Kg'
    },
    {
      nome: 'Jaca',
      foto: 'jaca.jpg',
      especificacoes: 'R$3,00 Kg',
      disponivel: true
    }
  ];

  const frutasContainer = $('#frutas-container');

frutas.forEach(fruta => {
  const div = $('<div>').addClass('fruta');

  const h2 = $('<h2>').text(fruta.nome);

  const img = $('<img>').attr('src', `fruta_img/${fruta.foto}`).attr('alt', fruta.foto).addClass('fruta_img');

  const p = $('<p>').text(fruta.especificacoes);

  const link = $('<a>').attr('href', `${fruta.nome.toLowerCase()}.html`).text('Ver mais');

  if (!fruta.disponivel) {
    h2.append(' (indisponivel)')
    div.addClass('fruta_indisponivel');
    link.addClass('disabled');
  }


  div.append(h2, img, p, link);

  frutasContainer.append(div);
});
});