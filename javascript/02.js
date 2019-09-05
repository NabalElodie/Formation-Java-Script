// Déclaré un tableau indexé

var monTableau = [];
var myArray = new Array; // Autre maniere mais identique

monTableau[0] = 'Hugo';
monTableau[1] = 'Rosemaël';
monTableau[2] = 'Aurelie';
monTableau[3] = 'Elodie';

console.log(monTableau);
console.log(monTableau[2]); //Aurelie
console.log(monTableau[3]); //Elodie

var nosPrenoms=[
'Nia',
'Catherine',
'Moise',
'Sandrine',
'Steeve',
'Cindy'
];
console.log(nosPrenoms);

 //-- Créer un objet en JavaScript

 var coordonnee = {

    // propriété     :        Valeur
   
      prenom         :        'Elodie',
      nom            :        'Nabal',
      age            :           22,
      tel            :         '0690155458'
    };
    console.clear();
    console.log(coordonnee);
    console.log(coordonnee.prenom); // ecriture à privilégier
    console.log(coordonnee['prenom']); 
    

    // Ici j'ai un tableau dans un tableau ou un tableau a deux dimensions

    var annuaireDesApprenantes = [


        [ 'Nia', 'VITALIS'],


       [ 'Angélique', 'JEAN-NOEL']
    ];
    console.log(annuaireDesApprenantes [0][0]);
    console.log(annuaireDesApprenantes [1][0]);
    console.log(annuaireDesApprenantes );

    var annuaireDesApprenantes = [
    { 
        prenom: 'Elodie',
        nom   : 'NABAL'

    },
{

      prenom : 'Cindy',
      nom    :  'BORDAIN'},

      { prenom : 'Moise',
      nom    :  'BLANC'
    }
    
];
console.clear();
console.log(annuaireDesApprenantes);
console.log(annuaireDesApprenantes[1]['prenom']);


console.log(annuaireDesApprenantes[0]['prenom']);
console.log(annuaireDesApprenantes[0]['prenom']);

console.log(annuaireDesApprenantes[1].prenom);
console.log(annuaireDesApprenantes[1].nom);

console.log(annuaireDesApprenantes[2].prenom);
console.log(annuaireDesApprenantes[2].nom);

var recetteDeCuisine = [

{ 
    repas: 'blaff',
    ingredients: 'fish, water, salt',
},
{
    repas: 'pelaw',
    ingredients: 'rice'
},

  
{  
        repas: 'merry',
  ingredients: 'coconut milk, sugar'
},

];
console.clear();
console.log(recetteDeCuisine);
console.log(recetteDeCuisine[1].repas.indregredients);

/* Nota Bene : un objet respecte toujours le format

{propriete : valeur
}
Ou, la valeur peut-être de plusieurs types:

{

    un booleen : true,
    unNombre: 18,
    unString: 'je suis un String',
    unObjet:
            {
                propriete : valeur
        
            },
            un tableau:[
                'Mathieu', 'Marc','Luc', 'Hugo', 'Jean'
            ]
}
*/

console.clear();
var couleurs = ['Rouge', 'Jaune', 'Vert'];
console.log(couleurs);

couleurs.push('Bleu');
console.log(couleurs);

couleurs.push(['Marron','Blanc']);
console.log(couleurs);

couleurs.push({couleur:'Gris'});
console.log(couleurs);

couleurs.unshift('Orange');
console.log(couleurs);

        // la fonction " push" permet de placer apres tandis que la fonction "unshift"

        /* SORTIR UN ELEMENT DU TABLEAU

        *La fonction pop() supprime le dernier element d'un tableau et retourne cet element. */

        var monDernierElement = couleurs.pop();
        console.log(couleurs);
        console.log(monDernierElement);

        /*
        * La même chose est possible avec le premier element en utilisant : sift().

        *La fonction splice() vous permet de faire sortir un ou plusieurs elements du tableau.
        */

        

            

