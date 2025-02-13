/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . */

// Creare un array con la lista degli invitati
let invited = ['Paolo', 'Fabio', 'Pietro', 'Gianluca', 'Davide'];

// Creare un for loop si chiede all'utente di inserire la propria mail

for (let i = 0; i < invited.length; i++) {
    const thisInvited = invited[i];
    const mail = prompt("Put your e-mail");
    if (thisInvited == mail) {
        alert("You can access to the party");
    } else {
        alert("Go back home");
    }
}


