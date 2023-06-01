$(document).ready(function() {
  const legumes = [
    {
      nome: 'Abóbora(indisponível)',
      foto: 'abóbora.png',
      especificacoes: 'Preço: R$ 8,72/kg',
      disponivel: false
    },
    {
      nome: 'Batata-doce(indisponível)',
      foto: 'batata-doce.png',
      especificacoes: 'Preço: R$ 3,99/kg',
      disponivel: false
    },
    {
      nome: 'Beterraba(indisponível)',
      foto: 'beterraba.png',
      especificacoes: 'Preço: R$ 3,59/kg',
    },
    {
      nome: 'Cenoura(indisponível)',
      foto: 'cenoura.png',
      especificacoes: 'Preço: R$ 4,99/kg'
    },
    {
      nome: 'Batata(indisponível)',
      foto: 'batata.png',
      especificacoes: 'Preço: R$ 3,99/kg'
    },
    {
      nome: 'Pepino(indisponível)',
      foto: 'pepino.png',
      especificacoes: 'Preço: R$ 3,50/kg'

    },
    {
      nome: 'Tomate(indisponível)',
      foto: 'tomate.png',
      especificacoes: 'Preço: R$ 6,99/kg'

    },

    {
      nome: 'Beringela(indisponivel)',
      foto: 'beringela.png',
      especificacoes: 'Preço: R$ 3,99/kg'

    },
    {
      nome: 'Cebola(indisponivel)',
      foto: 'cebola.png',
      especificacoes: 'Preço: R$ 4,50/kg'

    },
    {
      nome: 'Brócolis(indisponivel)',
      foto: 'brocolis.png',
      especificacoes: 'Preço: R$ 7,99/kg'

    },
    {
      nome: 'Pimentão',
      foto: 'pimentao.png',
      especificacoes: 'Preço: R$ 7,99/kg',
      disponivel: true
    },
    {
      nome: 'Couve-flor(indisponivel)',
      foto: 'couve-flor.png',
      especificacoes: 'Preço: R$ 9,00/kg',
      disponivel: false
    }
  ];

  const legumesContainer = $('#legumes-container');

  legumes.forEach(legume => {
    const div = $('<div>').addClass(legume.nome);

    const h2 = $('<h2>').text(legume.nome);

    const img = $('<img>').attr('src', `legumes_img/${legume.foto}`).attr('alt', legume.foto).addClass('legumes_img');

    const p = $('<p>').text(legume.especificacoes);

    const link = $('<a>').attr('href', '#').text('Ver-mais');

    if (!legume.disponivel) {
      link.addClass('indisponivel').on('click', function(e) {
        e.preventDefault();
      });
    } else {
      link.on('click', function(e) {
        e.preventDefault();
      
        $(".captcha-container").show();
      });
    }

    div.append(h2, img, p, link);
    legumesContainer.append(div);
  });

  $("#buy-button").click(function() {
  
    if (window.hcaptcha.getResponse()) {
      
      window.location.href = 'pimentao.html';
    } else {
      
      console.log("Por favor, resolva o captcha antes de continuar.");
    }
  });

  $(".h-captcha").on("h-captcha-callback", function(event) {
    
    $(".captcha-container").addClass("captcha-resolved");
  });
});
