function viewImage(...sources) {
    const modal = document.getElementById('imgModal');
    const container = document.getElementById('modalContainer');
    
    // Limpiar contenedor previo
    container.innerHTML = '';
    
    // Inyectar imágenes dinámicamente
    sources.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'modal-content';
        container.appendChild(img);
    });

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('imgModal').style.display = 'none';
}

// Cerrar con teclado
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        closeModal();
    }
});