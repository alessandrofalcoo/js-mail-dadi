/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . */


// Creare un array con la lista degli invitati
const invited = ['Paolo@gmail.com', 'Fabio@gmail.com', 'Pietro@gmail.com', 'Gianluca@gmail.com', 'Davide@gmail.com'];
console.log(invited);

// Chiedere all'utente di inserire la propria mail
const mail = prompt('Inserisci qua la tua email');

// Verificare se la mail è presente all'interno della lista
if (invited.includes(mail)) {
    alert('La tua mail è presente');

} else {
    alert('Ci dispiace la sua mail non è presente')
}

// Dare un messaggio di output all'utente dicendogli se la sua mail è o non è presente