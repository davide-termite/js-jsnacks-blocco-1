////// JSNACK 4 ////////

// Lista nomi
var listName = ["Vito", "Antonio", "Vitantonio", "Gianni", "Andrea", "Giannandrea"];

// Chiedo nome ad User
var userName = prompt("Come ti chiam?");

// Controllo nome Var
var check = false;

// Ricerca mail nella Lista
for (var i = 0; i < listName.length; i++) {
  if (listName[i] == userName ){
    check = true;
  }
}

// Output per User
if (check === true) {
  alert("Puoi entrare");
} else {
  alert("Non puoi entrare");
}
