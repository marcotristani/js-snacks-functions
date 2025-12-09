/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

names.le
// Dichiara la funzione qui.

const initialsArray = myarray => {
    let initials = [];
    for(let i = 0; i < myarray.length ; i++){
        initials[i] = myarray[i][0]; 
    }
    return initials;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(initialsArray(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]