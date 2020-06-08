// CONSEGNA // Fai inserire un numero, che chiameremo N, all’utente.
// CONSEGNA // Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.

// Chiedo ad utente di inserire numero
var numUser = parseInt(prompt("Inserisci un numero"));

// Genero Array con 10 numeri casuali da 1 a 100
for (var i = 0; i < numUser; i++) {
  var numArray = createArray();

  console.log(numArray);
}


// Genero Array con 10 numeri casuali da 1 a 100
function createArray () {
  var numArray = [];

  for (var j = 0; j < 10; j++) {
    var numRandom = Math.floor(Math.random() * 100 + 1);
    numArray.push(numRandom);
  }

  return numArray
}
