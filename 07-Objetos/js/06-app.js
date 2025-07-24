const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas : {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion:{
            pais: 'China'
        }
    }
};
// Solo mostraria en consola la informacion de fabricacion
//const { nombre, informacion: { fabricacion } } = producto;

//console.log(nombre);
//console.log(fabricacion);

// Si deseo ademas que me muestre en consola la informacion de "Informacion y fabricacion"
const { nombre, informacion, informacion:{ fabricacion}} = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
