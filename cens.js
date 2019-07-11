/*- Il software riceve in input un lungo testo e una serie di parole da censurare.

- Restituisce il testo con xxx al posto delle parole censurate.

- Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali*/

// faccio inserire all'utente la frase
var text= prompt("Inserisci il tuo testo")
console.log(text);
var censuraparola;
censura(text,censuraparola);
// funzione per eliminare le parole da una stringa
function censura(str, parola){
  var scelta = false;
  var decidi;
  var censurate = 0;
  var i = 0;
  alert("Vuoi censurare una parola? si --[continui]-- no --[termini]--");
  while( i < str.length && scelta == false){
  alert("scegli")
  decidi = prompt("si/no");
  if(decidi == "no"){
    scelta = true;
  }else if(decidi == "si") {
    parola = prompt("quale parola vuoi eliminare?");
    str = str.replace(parola,"xxx");
    censurate += 1;

  }else if(decidi != "no" && decidi != "si"){
    alert("non ho capito");
    i--;
  }
  i++;
  }
  console.log(str);
  console.log("parole censurate:"+ censurate);
}
