/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, 
in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.
*/

const numero_giocatore = Math.floor(Math.random() * 6);
const numero_pc = Math.floor(Math.random() * 6);
console.log(numero_pc);
console.log(numero_giocatore);

if (numero_giocatore < numero_pc){
    console.log("Hai perso");
    
}else {
    console.log("Hai vinto");
}