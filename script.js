function viewImage(...sources) {
    const modal = document.getElementById('imgModal');
    const container = document.getElementById('modalContainer');
    
    container.innerHTML = '';
    
    sources.forEach(src => {
        const wrapper = document.createElement('div');
        wrapper.className = 'modal-wrapper';

        const badge = document.createElement('div');
        badge.className = 'badge-verify';
        badge.innerHTML = '<i class="fas fa-check-circle"></i> VERIFICADO 2026';

        const img = document.createElement('img');
        img.src = src;
        img.className = 'modal-content';
        
        wrapper.appendChild(badge);
        wrapper.appendChild(img);
        container.appendChild(wrapper);
    });

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('imgModal').style.display = 'none';
}

function openInfoModal() {
    document.getElementById('infoModal').style.display = 'flex';
}

function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
}

document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        closeModal();
        closeInfoModal();
    }
});
