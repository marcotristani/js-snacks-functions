/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.
const greetingTime = myname => {
    const currentTime = new Date();
    const currentHour =currentTime.getHours();
    let greeting = 'buonasera';
    if( currentHour <= 13){
        greeting = 'buongiorno';
    }else if ( currentHour <= 17){
        greeting = 'buon pomeriggio';
    }
    return `${greeting} ${myname}`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(greetingTime(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.