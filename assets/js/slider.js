function expandirTarjeta(elemento) {
    var tarjeta = elemento.closest('.services__service');
    var descripcion = tarjeta.querySelector('.service__description');
    
    if (tarjeta.classList.contains('expandida')) {
        // Si la tarjeta ya está expandida, se colapsa
        tarjeta.classList.remove('expandida');
        elemento.textContent = 'Leer más';
        descripcion.style.display = 'none'; // Ocultar la descripción
    } else {
        // Si la tarjeta no está expandida, se expande
        tarjeta.classList.add('expandida');
        elemento.textContent = 'Leer menos';
        descripcion.style.display = 'block'; // Mostrar la descripción
    }
}

