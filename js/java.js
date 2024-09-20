

const btn = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');


let userWins = 0;
let computerWins = 0;
let draws = 0;

function getComputerChoice() {
    const arr = ['Камень', 'Ножницы', 'Бумага'];
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        draws++;
        return "Ничья";
    } else if (
        (userChoice === 'Камень' && computerChoice === 'Ножницы') ||
        (userChoice === 'Бумага' && computerChoice === 'Камень') ||
        (userChoice === 'Ножницы' && computerChoice === 'Бумага')
    ) {
        userWins++;
        return 'Вы выиграли раунд!';
    } else {
        computerWins++;
        return "Вы проиграли раунд!";
    }
}

function outputResult(userChoice, computerChoice, result) {
    resultDiv.innerHTML = `
        Вы выбрали: ${userChoice} <br>
        Компьютер выбрал: ${computerChoice} <br>
        Результат: ${result} <br><br>
        <strong>Общий результат:</strong> <br>
        Победы игрока: ${userWins} <br>
        Победы компьютера: ${computerWins} <br>
        Ничьи: ${draws} <br>
    `;
    

    if (userWins === 5) {
        resultDiv.innerHTML += "<br><strong>Поздравляем! Вы выиграли игру!</strong>";
        resetGame();
    } else if (computerWins === 5) {
        resultDiv.innerHTML += "<br><strong>Компьютер выиграл игру! Попробуйте снова!</strong>";
        resetGame();
    }
}

function resetGame() {
    userWins = 0;
    computerWins = 0;
    draws = 0;
}

btn.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = playRound(userChoice, computerChoice);
        outputResult(userChoice, computerChoice, result);
    });
});