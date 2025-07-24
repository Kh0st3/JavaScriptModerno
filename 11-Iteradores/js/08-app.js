// for in

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for( let pendiente in pendientes ){
    console.log(pendiente);
};

const automovil = {
    marca: 'Toyota',
    modelo: 'Corolla',
    year: 2021,
    transmision: 'automatico'
}

// for ( let propiedad in automovil ) {
//     console.log(`${automovil[propiedad]}`);
// }

for (let [llave, valor] of Object.entries(automovil)) {
    console.log(valor);
    console.log(llave);

}