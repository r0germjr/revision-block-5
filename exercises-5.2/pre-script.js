// Acesse o elemento elementoOndeVoceEsta .
let whereAmI = document.querySelector('#elementoOndeVoceEsta');
console.log(whereAmI);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let fatherWhererAmI = whereAmI.parentElement;
fatherWhererAmI.style.background = 'red';
console.log(fatherWhererAmI);

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let firstSonOfSon = whereAmI.firstElementChild;
console.log(firstSonOfSon);
firstSonOfSon.innerText = 'This is the First Son';

// Acesse o primeiroFilho a partir de pai .
console.log(fatherWhererAmI.firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(whereAmI.previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(whereAmI.nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
console.log(whereAmI.nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai .
console.log(fatherWhererAmI.lastElementChild.previousElementSibling);

// Crie um filho para elementoOndeVoceEsta .
newSon = document.createElement('div');
newSon.innerText = 'Meu novo filho';
whereAmI.appendChild(newSon);
newSon.id = 'novoFilho';

// Crie um irmão para elementoOndeVoceEsta .
let newBrother = document.createElement('ul');
newBrother.innerText = 'Nova Lista irmão';
newBrother.id = 'lista-irmao';
let theFather = document.querySelector('#pai');
theFather.appendChild(newBrother);

// Crie um filho para primeiroFilhoDoFilho.
let sonOfTheSon = document.querySelector('#primeiroFilhoDoFilho');
let oneMoreSOn = document.createElement('div');
oneMoreSOn.id = 'mais um filho';
sonOfTheSon.appendChild(oneMoreSOn);

// A partir desse filho criado, acesse terceiroFilho .
console.log(oneMoreSOn.parentElement.parentElement.nextElementSibling);

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

for (let index = fatherWhererAmI.children.length - 1; index >= 0; index -= 1) {
    let currentChildren = fatherWhererAmI.children[index];
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
    }
}

let secondSon = document.querySelector('#segundoEUltimoFilhoDoFilho');
secondSon.remove();
newSon.remove();