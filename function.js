// Funciones Declarativas

function saludar( nombre) {

    console.log(`Bienvenido ${nombre}`)
}

saludar('Juan Perez')

// Funciones de Expresion

const cliente = function(nombreCliente) {
    console.log(`Mostrando datos del cliente: ${nombreCliente}`)
}

cliente('Ernesto Ledesma')

// Funcione para sunmar dos numeros

const suma = function(a,b) {
    return a / b;
}

let resultado = suma( 2, 2);
console.log(resultado);

// Funciones por parametros por default || defecto

function actividad(nombre = 'Ayrton Barreto', profesion = 'Ingeniero en Telecomunicaiones') {
    console.log(`La persona ${nombre}, profesion ${profesion}`)
}

actividad()
actividad('Juan Perez', 'Desarrollador Web')
actividad('Ernesto Ledesma', 'Desarrollador Web')

