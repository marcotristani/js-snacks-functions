/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const initialStringArray = ( myarray, initial) => {
    let stringArray = [];
    let contatour = 0;
    for (let i = 0; i < myarray.length; i++) {
        if ( initial === myarray[i][0]){
            stringArray[contatour] = myarray[i];
            contatour++;
        } 
    }
    return stringArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(initialStringArray(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]