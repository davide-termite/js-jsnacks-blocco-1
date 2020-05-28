// Creo array
var numArray = [];

// Chiedo ad User 5 numeri
for (var i = 0; i < 5; i++) {
  var num = parseInt(prompt("Inserisci un numero"));
  numArray.push(num);
}
console.log(numArray);

// Somma dei numeri
var sum = 0;
for (var i = 0; i < numArray.length; i++) {
  sum += numArray[i];
}

// Output
alert("Hai inserito questi numeri " + numArray + " la cui somma è " + sum);
