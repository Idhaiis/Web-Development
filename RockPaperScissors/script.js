const result = document.getElementById('js-result');
const score = document.getElementById('js-score');
const rockButtonEl = document.getElementById('js-rock');
const paperButtonEl = document.getElementById('js-paper');
const scissorsButtonEl = document.getElementById('js-scissors');
const resetButtonEl = document.getElementById('js-reset');
const autoButtonEl = document.getElementById('js-auto');
const isAutoPlayingEl = document.getElementById('js-isAutoPlay');

let playerMove = '';
let computerMove = '';
let scoreObject = {
    win: 0,
    lose: 0,
    tie: 0
};
let isAuto = false;
let autoPlay;

function computerPlay () {
    const randomNumber = Math.random();
    if (0 <= randomNumber && randomNumber < 1/3) {
        return 'rock';
    }
    else if (1/3 <= randomNumber && randomNumber < 2/3) {
        return 'paper';
    }
    else {
        return 'scissors';
    };
};

function play (param) {

    computerMove = computerPlay();

    if (param === 'rock') {
        playerMove = 'rock';
    }
    else if (param === 'paper') {
        playerMove = 'paper';
    }
    else if (param === 'scissors') {
        playerMove = 'scissors';
    };

    result.innerHTML = `<h2>Player did ${playerMove}, Computer did ${computerMove}.</h2>`;

    if (playerMove === computerMove) {
        result.innerHTML += '<h2>Tie!</h2>';
        scoreObject.tie++;
    }
    else if ((playerMove === 'rock' && computerMove === 'scissors') || 
            (playerMove === 'paper' && computerMove === 'rock') || 
            (playerMove === 'scissors' && computerMove === 'paper')) {
                result.innerHTML += '<h2>Player Wins!</h2>';
                scoreObject.win++;
            }
    else {
        result.innerHTML += '<h2>Computer Wins!</h2>';
        scoreObject.lose++;
    };

    score.innerHTML = `Win = ${scoreObject.win} | Tie = ${scoreObject.tie} | Lose = ${scoreObject.lose}`;
};

rockButtonEl.addEventListener('click', function (){
    play('rock');
});

paperButtonEl.addEventListener('click', function () {
    play('paper');
});

scissorsButtonEl.addEventListener('click', function () {
    play('scissors');
});

resetButtonEl.addEventListener('click', function () {
    
    scoreObject.win = 0;
    scoreObject.lose = 0;
    scoreObject.tie = 0;

    score.innerHTML = `Win = ${scoreObject.win} | Tie = ${scoreObject.tie} | Lose = ${scoreObject.lose}`;
    result.innerHTML = '';
});

autoButtonEl.addEventListener('click', function () {
    
    if (isAuto === false) {
        autoPlay = setInterval(function() {
            play(computerPlay());
        }, 1000);
        isAuto = true;
        isAutoPlayingEl.innerHTML = '<h2 style="color: purple;">Auto Play On</h2>';
    }
    else if (isAuto === true) {
        clearInterval(autoPlay);       
        isAuto = false;
        isAutoPlayingEl.innerHTML = '';
    };
});