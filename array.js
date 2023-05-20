const carrito = [ 'Producto 1', 'Producto 2', 'Producto 3', 'Producto 4' ];

console.log(carrito);

const appContenedor = document.getElementById('#app');

let html = '';

carrito.forEach(producto => {
    html += `<li>${producto}</li>`;

});

appContenedor.innerHTML = html;


