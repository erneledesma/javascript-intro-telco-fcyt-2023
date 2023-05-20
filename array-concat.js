let lengueajes = ['JavaScript', 'PHP', 'Python', 'C#', ];
let frameworks = ['ReactJS', 'Laravel', 'Django', 'ASP.NET'];

// Unir los arreglos en uno solo
let concatenar = lengueajes.concat(frameworks);

//spred operator

let concatenar2 = [...lengueajes, ...frameworks];
// Realizza muchas tareas, la mas importante es unir arreglos

console.log(concatenar);
console.log(concatenar2);

//reverse

let [ultimo] = [...lengueajes].reverse();
console.log(ultimo);
