////// JSNACK 5 ////////

// Chiedo numero di 4 cifre ad Utente
var userNum = prompt("Inserisci un numero di 4 cifre");

// Controllo se numero è di 4 cifre

while ((userNum != 4) || (userNum == "") || isNaN(userNum)){
  userNum = prompt("Inserisci un numero di 4 cifre");
}

// Converto numero in un Array di cifre
var numArray = userNum.split("");

// Faccio somma numeri
var sum = 0;

for (var i = 0; i < numArray.length; i++) {
  sum += parseInt(numArray[i]);
}

// Output
alert("La somma delle cifre di " + userNum + " è " + sum);
