// Inizializza il punteggio
let score = 0;

// Associa il bottone all'evento click
const button = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score');

// Verifica che gli elementi siano correttamente collegati
if (button && scoreDisplay) {
    button.addEventListener('click', () => {
        score++; // Incrementa il punteggio
        scoreDisplay.textContent = score; // Aggiorna il punteggio sullo schermo
        console.log(`Punteggio attuale: ${score}`);
    });
} else {
    console.error("Errore: Non riesco a trovare il bottone o il punteggio!");
}
