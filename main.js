// variables delceration
var scores , 
    roundScore,
    activePlayer,
    gamePlaying;
// variables defintions 
init() // function that store vars

document.querySelector('.dice').style.display = 'none'; // hide the dice pic

document.querySelector(".btn-roll").addEventListener('click' , function()
{
    //thats an anonymous functions that cont be reused
    if(gamePlaying)
    {
            //random number
             var dice = Math.floor(Math.random() * 6) + 1; // local var
            //display the result
            var diceDom = document.querySelector('.dice') // local var
            diceDom.style.display = 'block';
            diceDom.src = 'img/dice-' + dice + '.png';
            //update the round score if the rolled number wasn't a 1
            if(dice !==1 )
            {
                //add score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
            else
            {
                //next Player
                nextPlayer();
        
                //document.querySelector('.dice').style.display = 'none' bad ux
            }
    }
    

})
document.querySelector(".btn-hold").addEventListener('click' , function()
{
    if (gamePlaying)
    {
        // add current score to global score
        scores[activePlayer] += roundScore;
        //update the UI
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer]
        //check if player won the game
        if(scores[activePlayer] >= 50)
        {
            document.querySelector("#name-" + activePlayer).textContent = 'winner!'
            document.querySelector(".dice").style.display = 'none';
            document.querySelector(".player-" + activePlayer+'-panel').classList.add("winner");
            document.querySelector(".player-" + activePlayer+'-panel').classList.remove("active");
            gamePlaying =  false;
        }
        else
        {
             //next player
            nextPlayer()
        }
    }
})
function nextPlayer()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector(".player-0-panel").classList.toggle('active')
        document.querySelector(".player-1-panel").classList.toggle('active')
}
document.querySelector(".btn-new").addEventListener('click' ,init)
function init()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.add("active");
}
//console.log(Math.floor(Math.random() * 6)) test