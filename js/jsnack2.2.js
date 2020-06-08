// CONSEGNA // Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
// CONSEGNA // Gatsby vuole generare una falsa lista di invitati.

// Creo liste nomi e cognomi
var nomiArray = ["Andrea", "Antonio", "Vincenzo", "Franco", "Vito"];
var cognomiArray = ["Rossi", "Verdi", "Bianchi", "Gialli", "Donvito"];

// Lista nomi casuali
var nomiCasuali = [];
var nomeCompleto;

// Funzione che genera nome random
function nameGenerator() {

  while (nomiCasuali.length <= 4) {

    // Indice Random Nomi
    var i = Math.floor(Math.random()* 4);
    // Indice Random Cognomi
    var j = Math.floor(Math.random()* 4);

    // Nome Generato
    var nomeCompleto = nomiArray[i] + " " + cognomiArray[j]
    // Nome in Array
    nomiCasuali.push(nomeCompleto);
  }
}


nameGenerator();
console.log(nomiCasuali);
