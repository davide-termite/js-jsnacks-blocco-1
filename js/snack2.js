////// JSNACK 2 ////////

// Chiedo due parole ad User
var firstWord = prompt("Inserisci una parola");
var secondWord = prompt("Inserisci una parola");

// Trovo il maggiore
if (firstWord.length > secondWord.length) {
  alert("La parola più corta è " + secondWord + ". La parola più lunga è " + firstWord);
} else if (firstWord.length < secondWord.length) {
  alert("La parola più corta è " + firstWord + ". La parola più lunga è " + secondWord);
} else if (firstWord.length == secondWord.length) {
  alert("Le parole hanno la stessa lunghezza");
}
