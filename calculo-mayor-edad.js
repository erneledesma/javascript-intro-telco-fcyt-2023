
let pedro = {
    nombre: 'Pedro',
    edad: 16
}

const MAYORIA_DE_EDAD = 18;

// calcular si pedro es mayor de edad
function esMayorDeEdad(persona) {
    if (persona.edad >= MAYORIA_DE_EDAD) {
        return true;
    }
    else {
        return false;
    }
}

console.log(`${persona.nombre} es mayor de Edad`);
console.log();