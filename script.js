// 1º: Declarar variáveis 
// 2º: Criar as funções
// 3º: Chamar as funções de acordo com os eventos


// Selecionar elementos na página: digitar no console document.querySelector('h1')
// const quadrado = document.querySelector(".quadrado");

// const mostrarQuadrado = function () {
//     quadrado.classList.toggle('visivel');
// }

// quadrado.onmouseenter = mostrarQuadrado;
// quadrado.onmouseout = mostrarQuadrado;


// quadrado.onmouseover = function() {
//     quadrado.classList.toggle('visivel');
// }  Outra forma de escrever a linha de cima.

const menuHamburguer = document.querySelector(".menu-hamburguer");

const navMenu = document.querySelector(".nav-menu-hamburguer");

const tirarMenu = function () {
    navMenu.classList.toggle("visivel");
    console.log('dfctfdcdrS');
    
}

menuHamburguer.onclick = tirarMenu;

