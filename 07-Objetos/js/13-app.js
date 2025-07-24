const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};
// object.keys arroja el nombre de las variables asignadas (parte izquierda)
console.log( Object.keys(producto));
// object.values arroja el valor asignado a las variables (parte derecha despues de ":")
console.log( Object.values(producto));
// object.entries retorna todo en pares (ambos).
console.log( Object.entries(producto));