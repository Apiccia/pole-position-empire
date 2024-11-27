let score = 0;

document.getElementById('start-button').addEventListener('click', () => {
    score++; // Incrementa il punteggio
    document.getElementById('score').textContent = score; // Aggiorna il punteggio nella pagina
    console.log(`Punteggio attuale: ${score}`);
});
