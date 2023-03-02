// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/*
-memorizzare variabile  del bottone
-crere funzione riconoscimentoParola(stringa)
    °creare varibile stringaInvertita = convertire stringa in arrey di caratteri(.split)invertirlo(.reverse) e riunirlo in una stringa.
    °?Se (stringa === stringaInvertita)
        -mostrare in pagina parola palindroma
    °:ALTRIMENTI
        -Scrivere in apgina il risultato ( parola non palindroma).
-al click del bottone creiamo una funzione che
    °stringa= il valore dell'input.
    riconoscimentoParola(stringa).

*/



const buttonPalindromeEl = document.getElementById("button-palindrome");

const resulTextEl = document.getElementById("result-text");


buttonPalindromeEl.addEventListener("click" , function(){
    // stringa = il valore dell'input.
    stringa = document.getElementById("palindrome-input").value;

    if( stringa == " " || stringa.trim() === ""){
        resulTextEl.innerText = "inserisci una parola";
    }else{
        palindromeWord(stringa);
    }

})






// -crere funzione riconoscimentoParola(stringa)
function palindromeWord(stringa){
    
    // creare varibile stringaInvertita = convertire stringa in arrey di caratteri(.split)invertirlo(.reverse) e riunirlo in una stringa.
    let stringaInvertita =  stringa.split("").reverse().join("");

    // Se (stringa === stringaInvertita)
    if(stringa === stringaInvertita){
        // mostrare in pagina parola palindroma
        resulTextEl.innerText = `Hai inserito ${stringa} ed è una parola  palindroma`;
    }else{
        // Scrivere in pagina il risultato ( parola non palindroma).
        resulTextEl.innerText = `${stringa} non è una parola  palindroma`;

    }
}




//----------------------//// EX 1---------------------------------------------- //





//-----------------------  EX2  ---------------------------------------------- //
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


/*
-Creaimo una variabile per il bottone dl numero utente
-Creiamo variabile del numeroUtente
-AL click del bottone 
    -numeroUtente = valore dl numero scritto nell'input
-creiamo funzione che riporti un numero random  per il computer e salviamo in una variabile
-creiamo variabile somma e sommiamo le due variabili
?SE (somma è un numero pari)
    °mostrare in pagina stringa numero pari e la somma dei due numeri
:ATRIMENTI
    °mostrare in pagina stringa numero dispari e la somma dei due numeri
*/

// Creaimo una variabile per il bottone dl numero utente
const buttonNumberEl = document.getElementById("button-number");

const numberResultEl = document.getElementById("number-result");

const oddButtonEl = document.getElementById("odd-button");

const evenButtonEl = document.getElementById("even-button");

let textEvenOddEl = document.getElementById("text-even-odd")

let isEvenOrOdd ;

oddButtonEl.addEventListener("click", function(){
    textEvenOddEl.innerText = "hai scelto pari";
    isEvenOrOdd = "pari"
})


evenButtonEl.addEventListener("click", function(){
    textEvenOddEl.innerText = "hai scelto dispari";
    isEvenOrOdd = "dispari"
})



// Creiamo variabile del numeroUtente

let numberUser;



buttonNumberEl.addEventListener("click", function(){
    
    // numeroUtente = valore dl numero scritto nell'input
    numberUser = document.getElementById("input-number").value;
    
    // creiamo funzione che riporti un numero random  per il computer e salviamo in una variabile
    let numberComputer = randomNumberBetween(1, 5);

    console.log(numberComputer);

    let sum = parseInt(numberUser) + parseInt(numberComputer);

    console.log(sum);
    if( isNaN(sum)){
        numberResultEl.innerText = "inserisci un numero";
    }else if(numberUser > 5){
        numberResultEl.innerText = "hai inserito un numero maggiore di 5";
    }else{
        numberResultEl.innerText = "hai inserito " + numberUser + ", il computer ha inserito " + numberComputer + " hai scelto " + isEvenOrOdd + ", la somma " + evenOrOdd(sum);
    }
})



function randomNumberBetween(min, max) {

    // genero un numero random
    let random = Math.floor(Math.random() * (max - min + 1) + min)
  
    // una volta che la nostra funzione viene eseguita, restituisci al suo posto questo valore
    return random;

  
}

function evenOrOdd(number){
    if(number % 2 == 0){
        return "è pari";
    }else{
        return "è dispari";
    }
}