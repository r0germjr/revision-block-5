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