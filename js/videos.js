function openLightbox(videoSrc) {
    const lightbox = document.getElementById('videoLightbox');
    const video = document.getElementById('fullscreenVideo');
    
    video.src = videoSrc;
    lightbox.style.display = 'flex';
    video.play();
    
    // Pausar todos los videos en miniatura
    document.querySelectorAll('.video-preview video').forEach(v => {
        v.pause();
    });
}

function closeLightbox() {
    const lightbox = document.getElementById('videoLightbox');
    const video = document.getElementById('fullscreenVideo');
    
    video.pause();
    lightbox.style.display = 'none';
    
    // Reanudar videos en miniatura
    document.querySelectorAll('.video-preview video').forEach(v => {
        v.play();
    });
}

// Cerrar al presionar ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Cerrar al hacer clic fuera del video
document.getElementById('videoLightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Iniciar videos en miniatura automáticamente
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.video-preview video').forEach(video => {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.play().catch(e => console.log(e));
    });
});