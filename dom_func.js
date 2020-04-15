


/**
 * Essa função irá ser aplicada na janela "Window"
 * addEventListener, adiciona um tipo de evento
 * No argumento da chamada do evento, utilizamos 'focus' e após isso uma função "Arrow Function"
 * Sendo assim quando ele verificar que teve foco na janela, roda a arrow function
 */



window.addEventListener('focus', event => {
    console.log('Focus');
});

/**
 * Essa função irá ser aplicada na janela "Document"
 * addEventListener, adiciona um tipo de evento
 * No argumento da chamada do evento, utilizamos 'click' e após isso uma função "Arrow Function"
 * Sendo assim quando ele verificar que teve click no documento, roda a arrow function
 */

document.addEventListener('click', event => {
console.log("Click");
});