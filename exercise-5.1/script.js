/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function changeText() {
    const howISee = document.getElementsByTagName('p')[1];
    howISee.innerText = 'I hope i will be around the world, better than today';
}
 changeText();

 function changeColor() {
    const changeColor = document.getElementsByClassName('main-content')[0];
    changeColor.style.background = 'rgb(76,164,109';
 }
 changeColor();

 function squareRedToWhite() {
    const redToWhite = document.getElementsByClassName('center-content')[0];
    redToWhite.style.background = 'white';
 }
 squareRedToWhite();

 function correctText() {
     const correctText = document.getElementsByTagName('h1')[0];
     correctText.innerText = 'Exercício 5.1 - JavaScript';
 }
 correctText();

 function upperText() {
     const upperText = document.getElementsByTagName('p')[0];
     upperText.innerText = upperText.innerHTML.toUpperCase();
 }
 upperText();

 function showParas() {
     let showParas = document.getElementsByTagName('p');
     for (let index = 0; index < showParas.length; index += 1) {
         console.log(showParas[index].innerText);
     }
 }

 showParas();