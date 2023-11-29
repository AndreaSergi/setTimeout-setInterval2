// Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
// Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
// Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
// Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.


let tempoRimanente = 10;

function contoAllaRovescia() {
    console.log(tempoRimanente)
    tempoRimanente--;

    if(tempoRimanente == 0){
        clearInterval(tempoScaduto);
        console.log("Conto alla rovescia terminato")
    }
}

console.log("Conto alla rovescia in corso...")

const tempoScaduto = setInterval(contoAllaRovescia, 1000)