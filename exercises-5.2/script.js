// O objetivo desses exercícios é colocar em prática o que você acabou de //aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando //apenas código JavaScript , o qual deve ser inserido entre as tags <script> e </script> .

////Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

//// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const tagH1 = document.createElement('h1');
tagH1.innerText = 'TEXT OF H1';
const tagBody = document.querySelector('body');
tagBody.appendChild(tagH1);

// 2- Adicione a tag div com a classe main-content como filho da tag body ;
const mainContent = document.createElement('div');
mainContent.className = 'main-content';;
tagBody.appendChild(mainContent);

// 3- Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
const centerContent = document.createElement('div');
mainContent.appendChild(centerContent);

// 4- Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
const paraCreated = document.createElement('p');
paraCreated.innerText = 'BORA SEXTAR EM INSTANTES';
centerContent.appendChild(paraCreated);

// 5- Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
const leftContent = document.createElement('div');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

// 6- Adicione a tag div com a classe right-content como filho da tag div criada //no passo 2;
const rightContent = document.createElement('div');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

// 7- Adicione uma imagem com src configurado para o valor https://picsum.photos///200 e classe small-image . Esse elemento deve ser filho do div criado no //passo 5;
const imagePut = document.createElement('img');
imagePut.src = 'https://picsum.photos///200';
imagePut.className = 'small-image';
leftContent.appendChild(imagePut);

// 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
const unorList = document.createElement('ul');
rightContent.appendChild(unorList);
const arrayNumbers  = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for(let index = 0; index < arrayNumbers.length; index += 1) {
    const itemsList = document.createElement('li');
    itemsList.innerText = arrayNumbers[index];
    unorList.appendChild(itemsList);
}

// 9- Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for(let index2 = 0; index2 < 3; index2 += 1) {
    const tagH3 = document.createElement('h3');
    tagH3.innerHTML = 'Show ' + index2;
    mainContent.appendChild(tagH3);
}

//Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

//Adicione a classe title na tag h1 criada;
tagH1.className = 'title';

//Adicione a classe description nas 3 tags h3 criadas;
const elementsH3 = document.querySelectorAll('h3');
for (let index = 0; index < 3; index += 1) {
  elementsH3[index].className = 'description';
}

//Remova o div criado no passo 5 (aquele que possui a classe left-content ).Utilize a função .removeChild();
mainContent.removeChild(leftContent);

//Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
rightContent.style.marginRight = 'auto';

//Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
centerContent.parentElement.style.background = 'green';

//Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
unorList.lastElementChild.remove();
unorList.lastElementChild.remove();
