const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
};

const producto2 = {
    nombre: "Tablet 10 pulgadas",
    precio: 1500,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
};

// this se refiere a los valores que se encuentran dentro del mismo objeto.

producto.mostrarInfo();
producto2.mostrarInfo();