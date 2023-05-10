let secretNumber = Math.floor(Math.random() * 10) + 1;
let buttonsNumber = document.querySelectorAll('.number');
let chance = 3;
let chanceDiv = document.querySelector('.chances');
let solutions = document.querySelector('.solutions');
let newGame = document.querySelector('.newGame');
let win = document.querySelector('.win');
let noWin = document.querySelector('.false');
for (let i = 0; i < buttonsNumber.length; i++) {
    buttonsNumber[i].onclick = function () {
        let button = buttonsNumber[i];
        let userNumber = buttonsNumber[i].innerText;
        game(userNumber, button);
        chanceDiv.innerText = 'Попытки: ' + chance;
    }

}

function game(userNumber, button) {
    if (userNumber == secretNumber) {
        solutions.innerText = 'Молодец ! Ты угадал секретное число';
        trueButton(button)
    } else if (userNumber < secretNumber) {
        solutions.innerText = 'Нет секретное число больше';
        noActiveButton(button);
        chance = chance - 1;
    } else {
        solutions.innerText = 'Нет секретное число меньше';
        noActiveButton(button);
        chance = chance - 1;
    }

    if (chance == 0) {
        gameOver();
    }
}

function noActiveButton(button) {
    button.classList.add('button_notactive');
}

function trueButton(button) {
    button.classList.add('button_true');
    for (let i = 0; i < buttonsNumber.length; i++) {
        buttonsNumber[i].classList.add('button_notactive');

    }
    win.play();
    newGame.classList.add('game_green');

}

function gameOver() {
    for (let i = 0; i < buttonsNumber.length; i++) {
        buttonsNumber[i].classList.add('button_notactive');
    }
    newGame.classList.add('game_red');
    noWin.play();
}

newGame.onclick = function () {
    chance = 3;
    chanceDiv.innerText = 'Попытки: ' + chance;
    newGame.classList.remove('game_red');
    newGame.classList.remove('game_green');
    solutions.innerText = 'Чего ждёшь? Пробуй!';
    secretNumber = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < buttonsNumber.length; i++) {
        buttonsNumber[i].classList.remove('button_notactive');
        buttonsNumber[i].classList.remove('button_true');
    }


}