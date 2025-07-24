const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si 2 numeros son iguales

console.log(numero1 == numero3); // False
console.log(numero1 == numero2); // True

// Comparador estricto
console.log(numero1 === numero2); // False
console.log(numero1 === parseInt(numero2)); // True
console.log( typeof numero1);
console.log( typeof numero2);

// Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); // True  
console.log(numero1 != numero2); // False 
console.log(numero1 !== parseInt(numero2)); // False