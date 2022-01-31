 //! definizione di una funzione

 function stampaCiao () {
     alert ('ciao');
 }

//! chiamata di una funzione

stampaCiao ();



//! esempio

var stringa1 = 'ciao Booleaners'
var stringa2" = 'ciao a tutti'
var stringa3" = 'ciao mondo'



function stampaCiao () {
    alert ('ciao');
}

function stampaStringa (str) {
    alert(str);
}

function stampaSuHTML () {
    document.getElementById('nome id su html').innerHTML = stringa;
}

function somma (x,y) {
    let somma = x + y;
    document.getElementById('nome id su html').innerHTML = somma;
}

stampaStringa (stringa1);
stampaStringa (stringa2);
stampaStringa (stringa3);
stampaSuHTML ('benvenuti studenti');

var sum = somma (a,b);
sum += 3                                                           totale 19
document.getElementById('nome id su html').innerHTML = sum         totale 16




//!    funzioni anonime

<button>clickMe</button>

document.getElementById('clickMe').addEventListener('click', function {
    alert ('oh no mi hai cliccato');
});


//!    arrow function

<button>clickMe</button>

document.getElementById('clickMe').addEventListener('click', function {
    alert ('oh no mi hai cliccato');
    console.log(this);                                                    this è il contesto in cui ci si trova
                                                                          in questo caso il click
});

//! quando clicco 

document.getElementById('clickMe').addEventListener('click', stampaCiao);



//! .....................................

function operazione (x,y) {

    if ( x > y ){
        return x - y
    }else {
        return y - x
    }

    return 'qualcosa';
}



