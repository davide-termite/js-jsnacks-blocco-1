// CONSEGNA // Crea due array che hanno un numero di elementi diversi.
// CONSEGNA // Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

// Creo due liste
var arrayFirst = [1, 2, 3];
var arraySecond = [10, 11, 12, 13, 14, 15];

console.log(arrayFirst);

while (arrayFirst.length != arraySecond.length) {

  // Creo elemento da aggiungere
  var addItem = Math.floor(Math.random() * 100 + 1);

  // Controllo in quale lista aggiungere elemento
  var check = arrayFirst.length < arraySecond.length;

  if (check) {
    arrayFirst.push(addItem);
  } else {
    arraySecond.push(addItem);
  }

}

console.log(arrayFirst);
console.log(arraySecond);
