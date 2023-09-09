document.addEventListener("DOMContentLoaded", function() {
    const titulo_elemento = document.getElementById('texto-dinamico');
    const texto_a_escrever = 'Olá, eu sou Lucas F Silva';

    function escreve_texto(texto, elemento, index) {
        if (index < texto.length) {
            elemento.innerHTML += texto.charAt(index);
        }
        setTimeout(function() {
            escreve_texto(texto, elemento, index + 1)
        }, 100);
    }
    escreve_texto(texto_a_escrever, titulo_elemento, 0)
})










































/*
document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("texto-dinamico");
    const textToWrite = "Olá, eu sou Lucas F Silva";

    function writeText(text, element, index) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            setTimeout(function () {
                writeText(text, element, index + 1);
            }, 100); // Ajuste o valor do timeout para controlar a velocidade de escrita
        }
    }

    writeText(textToWrite, titleElement, 0);
});
*/