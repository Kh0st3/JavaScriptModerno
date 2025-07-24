const autenticado = true;
const puedePagar = true;

//console.log( autenticado && puedePagar? 'Si esta autenticado': 'No esta autenticado ' )

// Al contrario del anterior "&&" este identificador "||" evalua que se cumpla alguna de las dos condiciones
//console.log( autenticado || puedePagar? 'Si esta autenticado': 'No esta autenticado ' )
/* El primer metodo para desarrollar el ejercicio
const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if( efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    if(efectivo>totalPagar) {
        console.log('Si pagaste con efectivo');
        } else {
            console.log('Otra forman de pago');
        
    }
    } else {
        console.log('Fondos Insuficientes');
    
}
*/

// Esta es otra sintaxis que se puede realizar, es un ternario anidado
console.log( autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar': 'No esta autenticado ' );