let palla = {

    'diametro':10,
    'colore': 'rossa',
    'tipo': 'palla da biliardo',
    'tipo impiego': 'gioco indoor'

}; //ricordati il punto e virgola

//vediamo cosa cè dentro palla

console.log(palla);

//come vedere l'attributo di palla ad esempio di diamentro

console.log(palla.diametro);

//oppure

console.log(palla['diametro']);

//in caso le parole fossero staccate

console.log(palla["tipo impiego"]);

//diamo un'altro valore a diametro

palla.diametro = 20;
console.log(palla.diametro);

//se volessi aggiungere un qualcosa all'interno di palla

palla.prezzo = 30;
console.log(palla.prezzo);

//! ciclo for oggetti

//in genere ci si riferisce alla parola KEY, cioè chiave in questo caso

for (let chiave in palla) {

    alert("per il nome:", + chiave + "il valore è:", palla[chiave]);
}

//! array multidimensionale


//questo è array normale
let myarray = [
    'pippo',
    'pluto',
    'paperino'
];

// multidimensionale

let classi = [
    ['pippo','pluto','paperino'],
    ['qui','quo','qua']
];

console,log(classi[0]);   //ci riferiamo al primo array

console,log(classi[0][2]); // ci riferiamo al primo array 'paperino'

//! esempi


const classi = [

    ['classe 1', 10 ],
    ['classi 2', 15 ]

];
console.log(classi [1] [1]); // ci darà riga classi2 15

//! array di oggetti

const classiOggetti = [

    {
        'nome': 'classe 1',
        'numero_studenti' : 10

    },
    {
        'numero_studenti' : 15,
        'nome': 'classe 2'
    }
];

console.log(classiOggetti[1]['numero_studenti']); // ci riferiamo al secondo oggetti a numeri_studenti che ha valore 15

// ciclo for con gli array di oggetti riportato sopra

for (let i = 0; i < classiOggetti.length; i++) {

    const oggettoAttuale = classiOggetti[i];
    console.log(oggettoAttuale.nome);
    
};


// entità persona

let persona = {

    'nome' : 'federico',
    'cognome' : 'pizz',
    'eta' : 30
    
};


// ciclo for per un argomento specifico

let palla = {

    'diametro':10,
    'colori': ['blu','rossa','giallo'],
    'tipo': 'palla da biliardo',
    'tipo impiego': 'gioco indoor'

};

let colori = palla.colori;

// per andare a scorrere l'arrary di colore 
for (let i = 0; i < colori.length; i++) {
    console.log(colori[i]);
    
}                     

















