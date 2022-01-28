//!funzioni


function somma (numero1, numero2) {
    
    let cacloloDellaSomma = numero1 + numero2;

    return cacloloDellaSomma;
}

const primaSomma (10 , 20);

const secondaSomma (50 , 150);


console.log (primaSomma);

console.log (secondaSomma);


//! pari o dispari

function pariDispari (numero) {

    let ritorno;

    if (numero % 2 == 0) {
        ritorno = "pari";

    }else {
        ritorno = "dispari";
    }    

    return ritorno;

}





//! esempio con array

let arryaDiProva = ritornaPrimiDieciNumeri();
console.log (arryaDiProva);

//funzione 

function ritornaPrimiDieciNumeri () {

    let myarray = [];

    for (let i = 0; i < 10; i++) {
        myarray.push(i);
    }

    return myarray;
}




//! moltiplicazione

function moltiplica (primoValore, secondoValore);{

    let risultato = primoValore * secondoValore;
    return risulato;
}

console.log(risultato); //*errore!!!!!

let valore = moltiplica (10, 3);



//! validazione di un numero, se non valido ritorna 0


function richiediNumero(messaggio){

    let ritorno;

    let valore = parseInt(prompt(messaggio));

    if (isNaN(valore)) {
        alert('numero non valido');
        ritorno=0;

    }else {
        ritorno = valore;
    }

    return ritorno;
}


const valoreRichiesto = richiediNumero ('inserisci un numero')

const secondoNumero = richiediNumero ('inserisci di nuovo un numero')

console.log(valoreRichiesto);



//! con bottone su HTML 

<buttom id=cliccami >cliccami</buttom>


function funzionePerEvento () {
    alert ('hai cliccato')
}


let bottone = document.getElementById ('cliccami');

bottone.addEventListener('click', function() {
    funzionePerEvento();
});




//! genera un numero casuale,
//! la funzione restituisce un numero intero casuale compreso tra un min e max che ho passato

function geRandomNumber( min, max ) {

    return math.floor(Math.random() * ( max - min + 1 ) + min)

}

let primoNumeroRandom = geRandomNumber (5 , 10);

let secondoNumeroRandom = geRandomNumber (40 , 75);

let NumeroDelLotto = geRandomNumber (1 , 90);


console.log(primoNumeroRandom);
console.log(secondoNumeroRandom);
console.log(NumeroDelLotto);



//! voglio generare un numero casuele tra 20 e 80


Math.random ()  mi restituisce un numero casuale compreso tra 0 e 0.99999999999999


calcolo la differenza tra min e max
ed otengo 60

genera un numero casuale compreso tra 0 e 60

aggiungo al minimo il valore casuale

Math.random() * ( max - min + 1 ) 
numero casuale  X  80 - 20  + 1  = 61

quindi ottengo un numero compreso tra 0 e 60,99999999












