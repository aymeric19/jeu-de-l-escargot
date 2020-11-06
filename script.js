

//Affiche le nom de la couleur du ou des gagnants
function affichegagnants(liste){
  var couleurs =["snail-yellowe","jaune","bleu","vert","orange","violet"];
  document.getElementById("nospam").disabled ='true';
  document.getElementById("pqwin").style.display ="block";
  var nbgagnant = 0;
  var text = "";
  for (var i = 0; i < 4; i++){
    if (liste[i] && nbgagnant == 0){
      text = text + couleurs[i];
      nbgagnant++;
    }
    else if(liste[i]){
      text = text + " et " + couleurs[i];
      nbgagnant++;
    }
    var span = document.getElementById('textwin')
    span.style.fontSize = '30px' // Font-size à 30px
    span.style.fontFamily = 'Comic sans MS' // Changement de police
    span.style.fontStyle = 'strong' // Changement de "style"
  }
  if (nbgagnant == 1){
    text = "Le gagnant est : " + text;
  }
  else {
    text = "Les gagnants sont : " + text;
  }
  document.getElementById("textwin").innerHTML =text;
}

//Recommencer en fin de partie
function reset(){
  togg("pqwin");
  gagnants = [false, false, false, false, false, false];
  firsts = [false, false, false, false, false, false];
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 6; j++) {
      var id = j.toString() + "-" + i.toString();
      if (i == 0){
        document.getElementById(id).style.visibility = "visible";
      }
      else {
        document.getElementById(id).style.visibility = "hidden";
      }
    }
  }
  document.getElementById("nospam").disabled = false;//empêche un bug
  document.getElementById("choixreg").disabled = false;//empêche changement de règle en jeu
}
