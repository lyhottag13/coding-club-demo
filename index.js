const button = document.getElementById('button');
const span = document.getElementById('span');

function main() {
    button.addEventListener('click', () => {
        span.textContent = roll();
    });
}

function roll() {
    return Math.floor(Math.random() * 12) + 1;
}

main();