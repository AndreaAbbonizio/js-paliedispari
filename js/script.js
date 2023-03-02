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

    palindromeWord(stringa);
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