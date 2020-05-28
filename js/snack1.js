////// JSNACK 1 ////////

// Chiedo due numeri ad User
var firstNum = prompt("Inserisci un numero");
var secondNum = prompt("Inserisci un numero");

// Trovo il maggiore
if (firstNum > secondNum) {
  alert("Il numero maggiore è " + firstNum);
} else if (firstNum < secondNum) {
  alert("Il numero maggiore è " + secondNum);
} else if (firstNum === secondNum){
  alert("I numeri sono uguali");
}
