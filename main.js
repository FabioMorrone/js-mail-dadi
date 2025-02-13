/*
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/


/* creare lista di mail */

const invitedEmails = ["giovanni@gmail.com", "paolo@gmail.com", "giuseppe@gmail.com", "mario@gmail.com", "carmelo@gmail.com"]
console.log(invitedEmails);

/* chiedere di inserire la mail dell'utente */
const theMail = prompt("Inserire mail dell'invitato")


/* controllare se la mail è nella lista */

let trovato = false

for (let index = 0; index < invitedEmails.length; index++) {
    const mail = invitedEmails[index];
    if (mail == theMail){
        
        trovato = true
    }

}
console.log(trovato);

if (trovato == true){
console.log("Sei invitato");

}else {
    console.log("Non sei invitato");
    
}