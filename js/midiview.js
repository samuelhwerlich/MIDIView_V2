$(window).on("load", function () {
    var userAgent = window.navigator.userAgent.toLowerCase();
    
    // Verifica se o navegador é IE, Trident ou Edge
    if (
        userAgent.indexOf("msie") != -1 ||
        userAgent.indexOf("trident") != -1 ||
        userAgent.indexOf("edge") != -1
    ) {
        alert(
            "I'm sorry.\nYour browser is not supported.\nOnly the following browsers are supported.\nPC(Win/Mac): Google Chrome\niPad/iPhone: Web MIDI Browser"
        );
    }

    // Verifica se os elementos existem antes de adicionar os eventos
    if ($('#manual_icon').length) {
        $('#manual_icon').on('click', function () {
            $("#usageDialog").dialog("open");
        });
    }

    if ($('#midi_icon').length) {
        $('#midi_icon').on('click', function () {
            $("#deviceDialog").dialog("open");
        });
    }

    // Redireciona ao clicar no botão de voltar
    if (document.getElementById("back_to_index")) {
        document.getElementById("back_to_index").addEventListener("click", function () {
            window.location.href = "index.html"; // Substitua pelo caminho correto do arquivo index
        });
    }

    // Exibe o conteúdo após o carregamento
    $("body").css({ visibility: "visible" });
});