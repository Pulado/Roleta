document.getElementById('spin-btn').addEventListener('click', function() {
    const ball = document.getElementById('ball');
    const wheel = document.querySelector('.roulette-wheel');
    let randomRotation = Math.floor(Math.random() * 360); // Rotação aleatória para a roleta

    // Animar a roleta
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Determinar o número vencedor
    const winningNumber = determineWinningNumber(randomRotation);
    document.getElementById('result').innerText = winningNumber;
});

function determineWinningNumber(rotation) {
    // Converta a rotação para um número correspondente (por exemplo, 1-36 ou 0)
    const sectionAngle = 360 / 37; // Divida o círculo em 37 seções
    let winningSection = Math.floor(rotation / sectionAngle);
    return (37 - winningSection) % 37; // Retorna o número vencedor (ajusta de acordo com o design)
}

document.getElementById('clear-bet').addEventListener('click', function() {
    // Limpar as apostas
    document.getElementById('result').innerText = '--';
});

// Lógica para adicionar aposta quando clicar em um número da mesa de apostas
document.querySelectorAll('.bet-number').forEach(number => {
    number.addEventListener('click', function() {
        alert(`Você apostou no número ${number.getAttribute('data-number')}`);
    });
});
