let users = [
    {id: 1, name: 'Vasya', surname: 'Ivanov', grade: '5B'},
    {id: 2, name: 'Petia', surname: 'Ivanov', grade: '5B'},
    {id: 3, name: 'Sasha', surname: 'Ivanov', grade: '5B'},
    {id: 4, name: 'Artem', surname: 'Ivanov', grade: '5B'},
    {id: 5, name: 'Sogdiyar', surname: 'Bahtiyarov', grade: 'children'},
    {id: 6, name: 'Nastya', surname: 'Rudko', grade: '1kurs'},
];

let winningNumbers = [2, 3];
let timer;
let timeLeft = 15;

let elem = document.querySelector('.list');
let timerDisplay = document.getElementById('timer');

for (let user of users) {
    elem.insertAdjacentHTML('beforeend',
    `
        <div class="card" id="${user.id}" onclick="checkWin(${user.id})">
            <h4 class="name">${user.name}</h4>
            <p class="surname">${user.surname}</p>
            <p class="grade">${user.grade}</p>
        </div>
    `
    );
}

function updateTimerDisplay() {
    timerDisplay.textContent = `Осталось времени: ${timeLeft} сек.`;
}

function checkWin(id) {
    clearTimeout(timer);

    if (winningNumbers.includes(id)) {
        alert('Вы выиграли!');
    } else {
        alert('Не та карточка!');
    }
}

function gameEnded() {
    alert('Игра окончена. Время истекло.');
}

function countdown() {
    updateTimerDisplay();

    if (timeLeft > 0) {
        timeLeft--;
        timer = setTimeout(countdown, 1000);
    } else {
        gameEnded();
    }
}

// Запустить таймер на 15 секунд
countdown();
