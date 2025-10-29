let contador = Number(localStorage.getItem('contador')) || 0;

const botao = document.getElementById('clickaqui');
const resetBtn = document.getElementById('reset');
const display = document.getElementById('numeroContador');

function atualizarDisplay(animar = true) {
    display.textContent = `Número de cliques: ${contador}`;
    localStorage.setItem('contador', contador);
    if (animar) {
        display.style.transform = 'scale(1.06)';
        display.style.opacity = '0.95';
        setTimeout(() => {
            display.style.transform = '';
            display.style.opacity = '';
        }, 140);
    }
}

botao.addEventListener('click', function() {
    contador++;
    botao.animate([{ transform: 'scale(1)' }, { transform: 'scale(0.96)' }, { transform: 'scale(1)' }], { duration: 140 });
    atualizarDisplay(true);
});

resetBtn.addEventListener('click', function() {
    contador = 0;
    atualizarDisplay(false);
    resetBtn.animate([{ opacity: 1 }, { opacity: 0.6 }, { opacity: 1 }], { duration: 180 });
});

atualizarDisplay(false);