$(document).ready(function() {
    $("#description").hide();

    $("#read-more-button").click(function() {
        var $button = $(this);
        var $description = $("#description");
        var $captchaContainer = $(".captcha-container");

        // Verificar se o captcha foi resolvido
        if (window.hcaptcha.getResponse()) {
            // Remover o botão de "Ler mais" e exibir a descrição
            $button.hide();
            $description.html("A jaca é conhecida por seus benefícios à saúde, incluindo a melhora do sistema imunológico, a redução do risco de doenças cardíacas e o auxílio na digestão. Além disso, a jaca também pode ser utilizada para preparar diversos pratos, como sucos, sobremesas e pratos salgados. Experimente essa fruta deliciosa e nutritiva!");
            $description.slideDown();
        } else {
            // Exibir uma mensagem de erro ou tomar outra ação se o captcha não foi resolvido
            console.log("Por favor, resolva o captcha antes de ler mais.");
        }
    });

    $(".h-captcha").on("h-captcha-callback", function(event) {
        // Marcar o contêiner do captcha como resolvido
        $(".captcha-container").addClass("captcha-resolved");
    });
});
