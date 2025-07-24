// Traversing the DOM

const navegacion = document.querySelector('nav');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// console.log(navegacion.childNodes); // Los espacios en blanco son considerados como elementos
// console.log(navegacion.children); // Muestra elementos reales

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo Heading desde trasersing the DOM';

// card.children[0].src = 'img/hacer3.jpg';

// console.log(card.children[0]);

// Traversion de hijo al padre

// console.log(card.parentNode);
// console.log(card.parentElement);

// console.log(card.nextElementSibling);
// console.log(card.previousElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);