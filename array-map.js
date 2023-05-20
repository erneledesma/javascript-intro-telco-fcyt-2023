carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];


const appContenedor = document.getElementById('#app');

let html = '';

carrito.map(producto => {
    html += `<li>${producto}</li>`;
});

appContenedor.innerHTML = html;

// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.