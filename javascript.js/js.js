// Aguarda o carregamento completo do documento HTML para executar o código dentro da função.
$(document).ready(function() {

    // Adiciona um ouvinte de evento 'click' ao elemento com o id 'mobile_btn'.
    // Quando o botão de menu mobile é clicado, a função é executada.
    $('#mobile_btn').on('click', function() {

        // Alterna a classe 'active' no elemento com o id 'mobile_menu'.
        // Se a classe 'active' já estiver presente, ela será removida; se não estiver, será adicionada.
        // Isso controla a visibilidade do menu mobile.
        $('#mobile_menu').toggleClass('active');

        // Encontra o ícone dentro do botão de menu mobile ('#mobile_btn') e alterna a classe 'fa-x'.
        // Isso altera o ícone no botão entre um ícone de barras (menu) e um "X" (fechar), caso o ícone de fechar seja definido com a classe 'fa-x'.
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});