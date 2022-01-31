//! variabile globale

const pluto = 'ciao mondo';
salutaCorretto (pluto);

function salutaCorretto (messaggio) {
    alert(messaggio);
}


//! arrow function 

()=> {

}
//! ................

function somma (a,b) {

    return a+b;

}

console.log (somma(5,3));

ci darà 8 sulla console

//! ................

let funzioneSomma = (a,b) => {
    return a+b ;
}

console.log (funzioneSomma(10,15));

ci darà 25 sulla console

//! ................

si può scrivere anche 

let funzioneSomma = (a,b) => a+b;


//! ................

let provaSenzaParametri = () => alert ('ciao mondo');

provaSenzaParametri();

ci darà- ciao mondo -sulla console

//! ..................

html  <div id="test" ></div>


document.getElementById('test').addEventListener('click', function() {
    console.log(this);
})
 
//! oppure con arrow function

document.getElementById('test').addEventListener('click',() => console.log(this); ));

//! ............................................................



