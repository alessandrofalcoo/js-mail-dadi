/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . */

// Creare un array con la lista degli invitati
const invited = ['Paolo@gmail.com', 'Fabio@gmail.com', 'Pietro@gmail.com', 'Gianluca@gmail.com', 'Davide@gmail.com'];

// Chiede all'utente di inserire la propria mail
const mail = prompt("Put your e-mail");

// Creare un for loop per verificare se l'invitato è presente nella lista

for (let i = 0; i < invited.length; i++) {
    const thisInvited = invited[i];
    if (thisInvited == mail) {
        console.log("You can access to the party");
    }
    else {
        console.log("Go back home");
    } break
}


