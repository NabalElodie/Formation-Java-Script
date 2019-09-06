// INCREMENTATION ET DECREMENTATION

// INCREMENTATION*

var nb1 =1;
nb1 = nb1 + 1;

// Ecriture simplifiée 
// La même chose que nb1 = nb1+1; Toujours par pas de 1 
 nb1 ++;

 nb1 = 1;
 nb1 = nb1 + 2; 
 // Ecriture simplifiée

 nb1 += 2; // J'ajoute +2 à nb1 identique à nb1 = nb1 + 2;
 nb1 += 5; // J'ajoute +5 à nb1 identique à nb1 = nb1 + 5;

 // DECREMENTATION 

 nb1 = 1;
 nb1 = nb1 - 1;
 // Ecriture simplifiée
 nb1--;

 // Ou encore 
 nb1 -= 2;
 // Ecriture simplifié
 nb1 -= 2;
 nb1 -= 5;

 //SUBTILITE

 nb1 = 0;
 console.log( nb1++ ); // 0 Javascript affiche d'abbord le nb1 avant de faire l'incrementation.

 nb1= 0;
 console.log( ++ nb1); // 1, Ici Javascript fait l'incrementation avant d'afficher le nb1.
