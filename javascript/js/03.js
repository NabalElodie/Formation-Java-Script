/*  LA CONCATENATION  */

var debutDePhrase = "Aujourd'hui ";var dateDuJour = new Date();
var suiteDePhrase = ' sont présent :'  ;
var nbApprenantes = 14;
var finDePhrase   =  ' apprenantes.<br>';

/* Nous souhaitons maintenant , grâce à la CONCATENATION afficher le tout en une phrase sur notre page ! */

document.write(

debutDePhrase + dateDuJour.getDate()
              + '/'
              + dateDuJour.getMonth()
              +'/'
              + dateDuJour.getFullYear()
              + suiteDePhrase
              + nbApprenantes
              + finDePhrase
);

/* Ici notre variable dateDuJour nous donne accès aux fonctions de l'objet date.
* Grâce au point '.' je peux utiliser ces fonctions.*/