

let viajando = function(destino) {
    return `Viajando a la ciudad de ${destino}`
}

let viaje;
// viaje = viajando('Paris');  
viaje = viajando('Londres');
// viaje = viajando('Barcelona');

console.log(viaje);

// Arrow Functions

const viajando2 = (destino, duracion) => {
    return `Viajando a la ciudad de ${destino} por ${duracion} dias`
}

let viaje2;
viaje2 = viajando2('Dubai' , ' 15 Dias');
console.log(viaje2);