const gridElement = document.getElementById('grid');

crea un if che contiene il ciclo for dopo,
per la selezione delle difficoltà (easy,medium,hard)


for (let i = 1 ; i <= 64 ; i++) {

    const node = document.createElement('div');
    node.classList.add('square');


    node.addEventListener('click', function(){
        console.log(this);
        this.classList.add('clicked');
    });

    gridElement.appendChild(node);

}