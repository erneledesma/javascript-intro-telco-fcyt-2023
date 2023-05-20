// Array de Objetos
const personasData = [
    {nombre: 'Juan', edad: 20, profesion: 'Diseñador'},
    {nombre: 'Pablo', edad: 32, profesion: 'Ingeniero Telco'},
    {nombre: 'Alejandra', edad: 44, profesion: 'Developer Front'},
    {nombre: 'Karen', edad: 22, profesion: 'Developer Back'}
]   

console.log(personasData);

// Filtrar personas mayores de 25 años
 const mayores = personasData.filter(persona => persona.edad > 25);

    console.log(mayores);

    const FiberData = [
        {marca: 'NEXT', nm: 20, tipo: 'Multimodo'},
        {marca: 'HP', nm: 32, tipo: 'Indice Gradual'},
        {marca: 'SIEMENS', nm: 44, tipo: 'Indice Gradual'},
        {marca: 'ORIKAKA', nm: 22, tipo: 'Multimodo'}
    ]   

    const multimodo = FiberData.filter(fiber => fiber.tipo === 'Multimodo');
    console.log(multimodo);


const longitudOnda = FiberData.filter(fiber => fiber.nm < 30);
console.log(longitudOnda);
    


    