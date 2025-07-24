// Operador Mayor que o Menor que

const dinero = 500;
const totalAPagar = 800;
const tarjeta = true;
const cheque = true;

if (dinero >= totalAPagar) {
    console.log('Si se puede pagar...')
} else if (cheque) {
    console.log('Si tengo un cheque')
}
    else if (tarjeta) {
        console.log ('Si puedo pagar porque tengo la tarjeta')
}
    else {
        console.log('Fondos Insufientes');
}