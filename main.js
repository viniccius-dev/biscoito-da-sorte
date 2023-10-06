const screenOne = document.querySelector('.screen-one');
const screenTwo = document.querySelector('.screen-two');
const openSnack = document.querySelector('.screen-one .img-snack');
const btnReset = document.querySelector('#btnReset');
const snackMessage = document.querySelector('#snackMessage');

const messages = 
[
'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
'A vida trará coisas boas se tiver paciência.',
'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
'Não compense na ira o que lhe falta na razão.',
'Defeitos e virtudes são apenas dois lados da mesma moeda.',
'A maior de todas as torres começa no solo.',
'Não há que ser forte. Há que ser flexível.',
'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
'A juventude não é uma época da vida, é um estado de espírito.'
]

let randomNumber = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

// Eventos

openSnack.addEventListener('click', handleClick);
btnReset.addEventListener('click', handleResetClick);
// Evento "enter"


// Funções
function handleClick() {
    toggleScreen();

    snackMessage.innerText = messages[randomNumber];
}

function handleResetClick() {
    toggleScreen();
    randomNumber = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
}

function toggleScreen() {
    screenOne.classList.toggle('hide');
    screenTwo.classList.toggle('hide');
}