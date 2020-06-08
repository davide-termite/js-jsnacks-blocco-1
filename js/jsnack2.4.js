// CONSEGNA // Crea due tag div con due id diversi: un div avrà il testo colorato di rosso mentre l’altro di verde.
// CONSEGNA // Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// Creo Array numeri random
var numbers = [];

// Divido numeri in pari e dispari
var numbersPari = [];
var numbersDispari = [];

// Riprendo i div in HTML
var red = document.getElementById("rosso");
var green = document.getElementById("verde");

// Creo Array
for (var i = 0; i < 10; i++) {
  var randomNum = Math.floor(Math.random()* 10 + 1);
  numbers.push(randomNum);

  var pari = randomNum % 2

  // Split Array in Pari e Dispari
  if (pari) {
    numbersPari.push(randomNum);
  } else {
    numbersDispari.push(randomNum);
  }
}

// DOM manipulation
red.innerHTML = numbersPari;
green.innerHTML = numbersDispari;
