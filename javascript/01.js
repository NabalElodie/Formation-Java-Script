// alert('Mon ficher js fonctionne !');
// deux slash pour faire un commentaire en uniligne
/*
Ici je peux faire un commentaire sur plusieurs lignes
racourci :
-CTRL + :
-SHIFT + ALT + A 
*/
// -1  déclarer une variable JS 
var prenom;

// -2 Affecter une valeur à la variable "prenom"
prenom="Elodie";
// -3 Afficher la valeur de ma variable dans la console
console.log(prenom);

//   LES TYPES DE VARIABLES  
// typeof permet de connître le type ,de valeur de ma variable.  
console.log( typeof prenom); // Ma variable "prenom" contient une chaîne de caractère (string).
// déclaration et affectation d'un nuombre
var age= 23;
console.log(typeof age);
console.log( age);

// Les variable des type FLOAT(décimales chiffres avec virgules)
var uneDecimale= -2.1525;
uneDecimale= -2.1525;
console.log(typeof uneDecimale);
console.log(uneDecimale);

// Les booléens (vrai/faux)

var unBooleen = true;
console.log(typeof unBooleen);
console.log(unBooleen) ;
// Les constantes (ne sont pas des variables)
/* La déclaration "const" me permet de créer une constante accessible UNIQUEMENT en lecture.
 * Sa valeur ne pourra pas être modofié par des réfectations ultérieur*/

const host="localhost";
const user="root";
const password="mysql";

// On ne peux donc pas faire cela
// user= "Elodie";

// Uncaught TypeError: Assignment to constant variable.
    
var unNombre= '24';
console.log(unNombre);
console.log(typeof unNombre); /* Petit subtilité , "unNombre" est ici de type "string"  à cause des quotes('')
au moment de l'affection*/

// Pour convertir un nombre entier qu'on appel un (Integer, ou Int)
unNombre = parseInt( unNombre );
console.log(unNombre);
console.log(typeof unNombre);

// Pour convertir un nombre a virgule (FLOAT)
unNombre ='12.55';
unNombre= parseFloat( unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//  LA PORTEE DES VARIABLES 

/* Les variables déclarées directement à la racine du fichier JavaScript
sont appelés : variables GLOBALES.*

Elles sont disponibles dans l'ensemble de vos documents JS
y compris dans les fonctions.
###
 *Les variables déclarées à l'interieur d'une fonction sont appelées : " variables LOCALES".

 Elles sont disponibles UNIQUEMENT dans le scoope de la fonction. */
 