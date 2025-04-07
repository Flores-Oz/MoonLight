window.addEventListener('load', () => {
    const music = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
  
    // Función para pausar o reanudar la música cuando el botón es presionado
    musicToggle.addEventListener('click', () => {
      if (music.paused) {
        music.play();  // Si está pausada, la reproduce
        musicToggle.textContent = '⏸️';  // Cambia el icono a pausa
      } else {
        music.pause();  // Si está reproduciéndose, la pausa
        musicToggle.textContent = '▶️';  // Cambia el icono a play
      }
    });
  
    // Inicializa el ícono de música según el estado
    music.addEventListener('play', () => musicToggle.textContent = '⏸️');
    music.addEventListener('pause', () => musicToggle.textContent = '▶️');
  });
  