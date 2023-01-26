var cross = document.getElementById('cross-id');
var circle = document.getElementById('circle-id');

cross.removeAttribute('id');
circle.removeAttribute('id');

const spot1 = document.getElementById('spot1');
const spot2 = document.getElementById('spot2');
const spot3 = document.getElementById('spot3');
const spot4 = document.getElementById('spot4');
const spot5 = document.getElementById('spot5');
const spot6 = document.getElementById('spot6');
const spot7 = document.getElementById('spot7');
const spot8 = document.getElementById('spot8');
const spot9 = document.getElementById('spot9');
const pvp = document.getElementById('pvp');
const pvc = document.getElementById('pvc');
const pvpScore = document.getElementsByClassName("pvp-score");
const pvcScore = document.getElementsByClassName("pvc-score");

let p1Score = 0;
let p2Score = 0;
let computerScore = 0;
let playerScore = 0;
let spotValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let isPvp = false;
let isPvc = false;
let gameStarted = false;
let p2Wins = false;
let p1Wins = false;
let pcWins = false;

const clickSpot = document.getElementsByClassName('click');
let move = 0;
function changeScore() {
    gameStarted = false;
    document.getElementById('end').removeAttribute('hidden');
    if (isPvc) {
        document.getElementById('computer-score').innerHTML = computerScore;
        document.getElementById('player-score').innerHTML = playerScore;
        if (p2Wins) {
            document.getElementById('who-wins').innerHTML = "Computer wins!";
            } else {
                document.getElementById('who-wins').innerHTML = "Player wins!";
            }
    }
    if (isPvp) {
        document.getElementById('p1-score').innerHTML = p1Score;
        document.getElementById('p2-score').innerHTML = p2Score;
        if (p2Wins) {
        document.getElementById('who-wins').innerHTML = "Player 2 wins!";
        } else {
            document.getElementById('who-wins').innerHTML = "Player 1 wins!";
        }
    }
}

function checkIfWin() {
    if (move >= 5) {
        if (spotValues[0] === 1 && spotValues[4] === 1 && spotValues[8] === 1) {
            document.getElementById('tl-br-line').removeAttribute('hidden');
            p1Score += 1;
            playerScore += 1;
            p1Wins = true;
            changeScore();
        }
        else if (spotValues[2] === 1 && spotValues[4] === 1 && spotValues[6] === 1) {
            document.getElementById('tr-bl-line').removeAttribute('hidden');
            p1Score += 1;
            playerScore += 1;
            p1Wins = true;
            changeScore();
        }
        else if (spotValues[0] === 1 && spotValues[3] === 1 && spotValues[6] === 1) {
            document.getElementById('l-line').removeAttribute('hidden');
            p1Score += 1;
            playerScore += 1;
            p1Wins = true;
            changeScore();
        }
        else if (spotValues[1] === 1 && spotValues[4] === 1 && spotValues[7] === 1) {
            document.getElementById('mid-v-line').removeAttribute('hidden');
            p1Score += 1;
            playerScore += 1;
            p1Wins = true;
            changeScore();
        }
        else if (spotValues[2] === 1 && spotValues[5] === 1 && spotValues[8] === 1) {
            document.getElementById('r-line').removeAttribute('hidden');
            p1Score += 1;
            playerScore += 1;
            p1Wins = true;
            changeScore();
        }
        else if (spotValues[0] === 1 && spotValues[1] === 1 && spotValues[2] === 1) {
            document.getElementById('top-line').removeAttribute('hidden');
            p1Score += 1;
            playerScore += 1;
            p1Wins = true;
            changeScore();
        }
        else if (spotValues[3] === 1 && spotValues[4] === 1 && spotValues[5] === 1) {
            document.getElementById('mid-h-line').removeAttribute('hidden');
            p1Score += 1;
            playerScore += 1;
            p1Wins = true;
            changeScore();
        }
        else if (spotValues[6] === 1 && spotValues[7] === 1 && spotValues[8] === 1) {
            document.getElementById('bottom-line').removeAttribute('hidden');
            p1Score += 1;
            playerScore += 1;
            p1Wins = true;
            changeScore();
        }
        else if (spotValues[0] === 2 && spotValues[4] === 2 && spotValues[8] === 2) {
            document.getElementById('tl-br-line').removeAttribute('hidden');
            p2Score += 1;
            computerScore +=1;
            p2Wins = true;
            changeScore();
        }
        else if (spotValues[2] === 2 && spotValues[4] === 2 && spotValues[6] === 2) {
         document.getElementById('tr-bl-line').removeAttribute('hidden');
            p2Score += 1;
            p2Wins = true;
            computerScore +=1;
            changeScore();
        }
        else if (spotValues[0] === 2 && spotValues[3] === 2 && spotValues[6] === 2) {
            document.getElementById('l-line').removeAttribute('hidden');
            p2Score += 1;
            p2Wins = true;
            computerScore +=1;
            changeScore();
        }
        else if (spotValues[1] === 2 && spotValues[4] === 2 && spotValues[7] === 2) {
            document.getElementById('mid-v-line').removeAttribute('hidden');
            p2Score += 1;
            p2Wins = true;
            computerScore +=1;
            changeScore();
        }
        else if (spotValues[2] === 2 && spotValues[5] === 2 && spotValues[8] === 2) {
            document.getElementById('r-line').removeAttribute('hidden');
            p2Score += 1;
            p2Wins = true;
            computerScore +=1;
            changeScore();
        }
        else if (spotValues[0] === 2 && spotValues[1] === 2 && spotValues[2] === 2) {
            document.getElementById('top-line').removeAttribute('hidden');
            p2Score += 1;
            p2Wins = true;
            computerScore +=1;
            changeScore();
        }
        else if (spotValues[3] === 2 && spotValues[4] === 2 && spotValues[5] === 2) {
            document.getElementById('mid-h-line').removeAttribute('hidden');
            p2Score += 1;
            p2Wins = true;
            computerScore +=1;
            changeScore();
        }
        else if (spotValues[6] === 2 && spotValues[7] === 2 && spotValues[8] === 2) {
            document.getElementById('bottom-line').removeAttribute('hidden');
            p2Score += 1;
            p2Wins = true;
            computerScore +=1;
            changeScore();
        }
        
        else if (move >= 9) {
            document.getElementById('end').removeAttribute('hidden');
            document.getElementById('who-wins').innerHTML = "Draw!";
        }
    }
}
function filterArray(value) {
    const index = spots.indexOf(value);
    spots.splice(index, 1);
}

function clearValues() {
    spotValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    spots = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    move = 0;
    gameStarted = true;
    p2Wins = false;
    p1Wins = false;
    const unhide = document.getElementsByClassName('unhide');
    for (let k = 0; k < clickSpot.length; k++){
        clickSpot[k].innerHTML = "";
    }
    for (let o = 0; o < unhide.length; o++) {
        unhide[o].setAttribute('hidden', true);
    }
}
;

let spots = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function randomPcChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pcChoice() {
    if(move >= 8) {
        return;
    }
    let randomNumber = (randomPcChoice(1, spots.length) - 1);
    let chosenSpot = spots[randomNumber];
    circle = circle.cloneNode(true);
    circle.removeAttribute("hidden");
    clickSpot[chosenSpot - 1].appendChild(circle);
    spotValues[chosenSpot - 1] = 2;
    filterArray(spots[randomNumber]);
    move += 1;
    if (!p1Wins) {
        checkIfWin();
    }
    
}

document.getElementById('menu').addEventListener('click',() => {
    clearValues();
    gameStarted = false;
    p1Score = 0;
    p2Score = 0;
    computerScore = 0;
    playerScore = 0;
    document.getElementById('end').setAttribute('hidden', true);
    document.getElementById('choice').style.display = 'flex';
    document.getElementById('p1-score').innerHTML = p1Score;
    document.getElementById('p2-score').innerHTML = p2Score;
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('computer-score').innerHTML = computerScore;
    for (let j = 0; j < pvpScore.length; j++) {
        pvpScore[j].setAttribute("hidden", true);
        pvcScore[j].setAttribute("hidden", true);
    }
    isPvp = false;
    isPvc = false;
});

document.getElementById('try-again').addEventListener('click',() => {
    clearValues();
    document.getElementById('end').setAttribute('hidden', true);
});

pvp.addEventListener('click',() => {
    isPvp = true;
    gameStarted = true;
    document.getElementById('choice').style.display = 'none';
    for (let j = 0; j < pvpScore.length; j++) {
        pvpScore[j].removeAttribute("hidden");
    }
});

pvc.addEventListener('click',() => {
    isPvc = true;
    gameStarted = true;
    document.getElementById('choice').style.display = 'none';
    for (let j = 0; j < pvcScore.length; j++){
        pvcScore[j].removeAttribute("hidden");
    }
});

spot1.addEventListener('click',() => {
    if (spotValues[0] === 0 && gameStarted === true && isPvp === true) {
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot1').appendChild(cross);
            spotValues[0] = 1;
            move += 1;
        }
        else if (move % 2 !== 0) {
            circle = circle.cloneNode(true);
            circle.removeAttribute("hidden");
            document.getElementById('spot1').appendChild(circle);
            spotValues[0] = 2;
            move += 1;
        }
        checkIfWin();
    } else if (spotValues[0] === 0 && gameStarted === true && isPvc === true) {
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot1').appendChild(cross);
            spotValues[0] = 1;
            move += 1;
            filterArray(1);
            checkIfWin();
            pcChoice();
            
        } 
    }
});

spot2.addEventListener('click',() => {
    if (spotValues[1] === 0 && gameStarted === true && isPvp === true) {
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot2').appendChild(cross);
            spotValues[1] = 1;
            move += 1;
        }
        else if (move % 2 !== 0) {
            circle = circle.cloneNode(true);
            circle.removeAttribute("hidden");
            document.getElementById('spot2').appendChild(circle);
            spotValues[1] = 2;
            move += 1;
        }
        checkIfWin();
    }
    else if (spotValues[1] === 0 && gameStarted === true && isPvc === true) {
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot2').appendChild(cross);
            spotValues[1] = 1;
            move += 1;
            filterArray(2);
            checkIfWin();
            pcChoice(); 
        } 
    }
});

spot3.addEventListener('click',() => {
    if (spotValues[2] === 0 && gameStarted === true && isPvp === true){
        if (move % 2 === 0 ) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot3').appendChild(cross);
            spotValues[2] = 1;
            move += 1;
        }
        else if (move % 2 !== 0) {
            circle = circle.cloneNode(true);
            circle.removeAttribute("hidden");
            document.getElementById('spot3').appendChild(circle);
            spotValues[2] = 2;
            move += 1;
        }
        checkIfWin();
    }
    else if (spotValues[2] === 0 && gameStarted === true && isPvc === true) {
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot3').appendChild(cross);
            spotValues[2] = 1;
            move += 1;
            filterArray(3);
            checkIfWin();
            pcChoice();
        } 
    }
    
});

spot4.addEventListener('click',() => {
    if (spotValues[3] === 0 && gameStarted === true && isPvp === true){
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot4').appendChild(cross);
            spotValues[3] = 1;
            move += 1;
        }
        else if (move % 2 !== 0) {
            circle = circle.cloneNode(true);
            circle.removeAttribute("hidden");
            document.getElementById('spot4').appendChild(circle);
            spotValues[3] = 2;
            move += 1;
        }
        checkIfWin();
    }
    else if (spotValues[3] === 0 && gameStarted === true && isPvc === true) {
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot4').appendChild(cross);
            spotValues[3] = 1;
            move += 1;
            filterArray(4);
            checkIfWin();
            pcChoice();
        } 
    }
});

spot5.addEventListener('click',() => {
    if (spotValues[4] === 0 && gameStarted === true && isPvp === true){
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot5').appendChild(cross);
            spotValues[4] = 1;
            move += 1;
        }
        else if (move % 2 !== 0) {
            circle = circle.cloneNode(true);
            circle.removeAttribute("hidden");
            document.getElementById('spot5').appendChild(circle);
            spotValues[4] = 2;
            move += 1;
        }
        checkIfWin();
    }
    else if (spotValues[4] === 0 && gameStarted === true && isPvc === true) {
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot5').appendChild(cross);
            spotValues[4] = 1;
            move += 1;
            filterArray(5);
            checkIfWin();
            pcChoice();
        } 
    }
});

spot6.addEventListener('click',() => {
    if (spotValues[5] === 0 && gameStarted === true && isPvp === true){
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot6').appendChild(cross);
            spotValues[5] = 1;
            move += 1;
        }
        else if (move % 2 !== 0) {
            circle = circle.cloneNode(true);
            circle.removeAttribute("hidden");
            document.getElementById('spot6').appendChild(circle);
            spotValues[5] = 2;
            move += 1;
        }
        checkIfWin();
    }
    else if (spotValues[5] === 0 && gameStarted === true && isPvc === true) {
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot6').appendChild(cross);
            spotValues[5] = 1;
            move += 1;
            filterArray(6);
            checkIfWin();
            pcChoice();
        } 
    }
});

spot7.addEventListener('click',() => {
    if (spotValues[6] === 0 && gameStarted === true && isPvp === true){
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot7').appendChild(cross);
            spotValues[6] = 1;
            move += 1;
        }
        else if (move % 2 !== 0) {
            circle = circle.cloneNode(true);
            circle.removeAttribute("hidden");
            document.getElementById('spot7').appendChild(circle);
            spotValues[6] = 2;
            move += 1;
        }
        checkIfWin();
    }
    else if (spotValues[6] === 0 && gameStarted === true && isPvc === true) {
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot7').appendChild(cross);
            spotValues[6] = 1;
            move += 1;
            filterArray(7);
            checkIfWin();
            pcChoice();
        } 
    }

});

spot8.addEventListener('click',() => {
    if (spotValues[7] === 0 && gameStarted === true && isPvp === true){
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot8').appendChild(cross);
            spotValues[7] = 1;
            move += 1;
        }
        else if (move % 2 !== 0) {
            circle = circle.cloneNode(true);
            circle.removeAttribute("hidden");
            document.getElementById('spot8').appendChild(circle);
            spotValues[7] = 2;
            move += 1;
        }
        checkIfWin();
    }
    else if (spotValues[7] === 0 && gameStarted === true && isPvc === true) {
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot8').appendChild(cross);
            spotValues[7] = 1;
            move += 1;
            filterArray(8);
            checkIfWin();
            pcChoice();
        } 
    }
});

spot9.addEventListener('click',() => {
    if (spotValues[8] === 0 && gameStarted === true && isPvp === true){
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot9').appendChild(cross);
            spotValues[8] = 1;
            move += 1;
        }
        else if (move % 2 !== 0) {
            circle = circle.cloneNode(true);
            circle.removeAttribute("hidden");
            document.getElementById('spot9').appendChild(circle);
            spotValues[8] = 2;
            move += 1;
        }
        checkIfWin();
    }
    else if (spotValues[8] === 0 && gameStarted === true && isPvc === true) {
        if (move % 2 === 0) {
            cross = cross.cloneNode(true);
            cross.removeAttribute("hidden");
            document.getElementById('spot9').appendChild(cross);
            spotValues[8] = 1;
            move += 1;
            filterArray(9);
            checkIfWin();
            pcChoice();
        } 
    }
});
