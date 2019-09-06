// LES FONCTION

//Déclarere une fonction
function bonjour() {
alert('bonjour !');
}

// J'excecute ma fonction, et je declenche ses insctructions.
bonjour();
function ditBonjour( prenom, nom) {

    console.log(prenom + ' '+ nom);
    document.write(
        'Bonjour <strong>'
        + prenom
        + ' '
        + nom
        + '</strong> ! <br>'

    )
}

ditBonjour('Elodie', 'NABAL');
ditBonjour('Sylvio', 'Vagadasadom');




function calculTva ( montantHt, tauxTva = 8.5 ){

    return montantHt + ( montantHt * ( tauxTva / 100) );
    
}
var montantTtc1 = calculTva(10);
var montantTtc2 = calculTva(10, 5.5);
var montantTtc3 = calculTva(10, 20);

console.log(montantTtc1);
console.log(montantTtc2);
console.log(montantTtc3);

console.clear();


function tauxDeConversion ( montantEuro, tauxDeConversionUsd = 1.10296 ) {
    return montantEuro * tauxDeConversionUsd;    
}
var montantEuro = 15;
var montantUsd = tauxDeConversion(montantEuro);
console.log(
    montantEuro
        + ' € en dollars donne : '
        + montantUsd
        + '$'
);



