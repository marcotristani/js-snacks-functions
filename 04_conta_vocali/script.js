/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const counterVowels = mystring => {7
    let counterVolwes = 0;
    let mystringVolwes = [];
    for (let i = 0; i < mystring.length; i++) {                     //ciclo per prendere una ad una le lettere della mia string
        const vowels = ['a','e','i','o','u'];                       //stringa di vocali
        for (let index = 0; index < vowels.length; index++) {       //ciclo per confrontare la mia iesima lettera della stringa con ogni vocale singolarmente
            if( vowels[index] === mystring[i].toLowerCase()){
                mystringVolwes[counterVolwes] = mystring[i];
                counterVolwes++;
            }   
        } 
    }
    return mystringVolwes;
}


// Invoca la funzione qui e stampa il risultato in console
const volwesWord = counterVowels(word);
const counterVolwesWord = volwesWord.length;
console.log(counterVolwesWord, volwesWord);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)