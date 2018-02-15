/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
init();

var scores, roundScore, activePlayer, gamePlaying, winningScore, lastDice1, lastRoll, currentRoll;


function init() {
    gamePlaying = true;
    scores =[0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#current-0').textContent;
//console.log(x);


document.querySelector('.btn-roll').addEventListener('click', function() {
//    winningScore = document.getElementById('winningScore').value;
    if(gamePlaying) {
        document.querySelector('.dice1').classList.remove('bust');
        document.querySelector('.dice2').classList.remove('bust');
        //1. Random number
        var dice1 = Math.floor(Math.random() * 6 ) + 1;
        var dice2 = Math.floor(Math.random() * 6 ) + 1;
        
        //2. display
        var diceDOM1 = document.querySelector('.dice1')
        diceDOM1.style.display = 'block';
        var diceDOM2 = document.querySelector('.dice2')
        diceDOM2.style.display = 'block';
        
        diceDOM1.src = 'dice-' + dice1 + '.png';
        diceDOM2.src = 'dice-' + dice2 + '.png';
        
        currentRoll = dice1 + dice2;
        //3. Undate round score If round number was not one
        if (lastRoll === 12 && currentRoll === 12) {
            document.querySelector('.dice1').classList.add('bust');
            document.querySelector('.dice2').classList.add('bust');
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContet = '0';
            nextPlayer();
            }else if (dice1 !== 1 && dice2 !== 1 ) {
                console.log("in 1 ")
                //add score
                roundScore += (dice1 + dice2);
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }else if (dice1 === 1 && dice2 === 1){
                document.querySelector('.dice1').classList.add('bust');
                document.querySelector('.dice2').classList.add('bust');
                nextPlayer();
            }else if(dice2 === 1) {
                document.querySelector('.dice2').classList.add('bust');
                nextPlayer();
            }else if(dice1 === 1 ) {
                document.querySelector('.dice1').classList.add('bust');  
                nextPlayer();
            } 
        lastRoll = currentRoll;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        //add current score to global score
        scores[activePlayer] += roundScore;

        // add update to UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        console.log(winningScore);
        //Undefined, 0 null or '' are coerced to false
        if(input){
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next Player
            nextPlayer();
        } 
    }  
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
//    document.querySelector('.dice1').style.display = 'none';
//    document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

//

/*
MY 3 CHALLENGES

ADD THE FOLLOWING RULES:

1. A player looses his entire score when he rolles two 6'es in a row. After that, it's the next players turn. (hint: always save the previous dice roll in a separate variable)


2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in Javascript. This is a good oportunity to use google to figure this out)


3. Add another dice to the game, so that there are two dices now. The player looses his current score with one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)








*/



