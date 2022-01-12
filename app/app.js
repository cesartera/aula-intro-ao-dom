// console.log("Estou funcionando!");

// //DOM
// //Document Object Model
// //Traduzindo: Documento de Modelo de Objetos

// console.log(document,"Este aqui é o DOM")

// console.log(document.body, "Este é o Body");


// //MÉTODOS PARA SELEÇÃO DE ELEMENTOS
// console.log(document.querySelector('p'));
// console.log(document.querySelectorAll('p'));

// var meuItem = document.querySelector('li');
// console.log(meuItem);

// var minhaLista = document.querySelectorAll('li');
// console.log(minhaLista)

// var outroParagrafo = document.getElementById('outroP');
// console.log(outroParagrafo);

// var pComClasse = document.getElementsByClassName('classeP');
// console.log(pComClasse);

// //ALTERAR ATRIBUTOS
// var link = document.querySelector('a');
// console.log(link, 'Este é o meu link');

// console.log(link.getAttribute('href'), "Este é o href do link");

// var novoLink = 'https://www.somostera.com';

// link.setAttribute('href', novoLink);
// link.setAttribute('id', "meuLink");

// console.log(link.getAttribute('id'));

// console.log(link.getAttribute('href'), "Este é o NOVO href do link");

// link.innerText = "Site da Tera";

// document.querySelector('p').innerHTML = "<p> Este link vai para o site da <a href='https://www.somostera.com'>Tera</a></p>";

// var quartoItem = document.createElement('li');
// quartoItem.innerText = 'Item 4';
// document.querySelector('ul').appendChild(quartoItem);

// outroParagrafo.style.backgroundColor = "red";

// var segundoParagrafo = document.querySelectorAll('p')[2];
// // segundoParagrafo.remove();

// segundoParagrafo.style.backgroundColor = "blue";

// var minhaLista = document.querySelectorAll('li');
// console.log(minhaLista, "quem é minha Lista?");

// var segItemMinhaLista = minhaLista[1];
// console.log(segItemMinhaLista);
// // segItemMinhaLista.remove();

// var btnMagalu = document.getElementById('btn-magalu');
// console.log(btnMagalu);

// btnMagalu.addEventListener('mouseover', contarInteresse);

// function mudarCor(){
//     btnMagalu.style.backgroundColor = "white";
//     btnMagalu.style.color = "blue";
// }

// btnMagalu.addEventListener('mouseout', voltarCor);

// function voltarCor(){
//     btnMagalu.style.backgroundColor = "blue";
//     btnMagalu.style.color = "white";
// }

// var contInteresse = 0;
// function contarInteresse (){
//     contInteresse ++;
//     console.log(`Passaram o mouse ${contInteresse} vezes no botão Magalu` )
// }


console.log(document.getElementById('novaTarefa'));
var inputNovaTarefa = document.getElementById('novaTarefa');
console.log(inputNovaTarefa.getAttribute('value'));

var arrayTarefas = [];
console.log(arrayTarefas, "arrayTarefas antes do push");

arrayTarefas.push(inputNovaTarefa.getAttribute('value'));

console.log(arrayTarefas, "arrayTarefas depois do push");

var todosLi = document.querySelectorAll('li');


for (i=0; i<todosLi.length; i++){
    todosLi[i].addEventListener('mouseover', mudarCor)
    // todosLi[i].addEventListener('mouseout', voltarCor)
}

function mudarCor(){
    console.log('mudarCor foi chamada!!!')
    this.style.backgroundColor = "red";
}

function voltarCor(){
    console.log('voltarCor foi chamada!!!')
    this.style.backgroundColor = "lightgrey";
}







