'use strict';
const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')

const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0')
const current1El=document.getElementById('current--1')
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
let currentScore=0
score0El.textContent=0
score1El.textContent=0
diceEl.classList.add('hidden')
let activePlayer= 0;
let scores =[0,0]
let playing = true 
// starting conditions 
const init =function(){
    playing=true
    currentScore=0
    score0El.textContent=0
    score1El.textContent=0
    diceEl.classList.add('hidden')
     current0El.textContent=0
     current1El.textContent=0
    activePlayer= 0;
    player1El.classList.remove('player--active')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player0El.classList.remove('player--winner');
     scores =[0,0]
   
}
const switchPlayer = function(){ document.getElementById(`current--${activePlayer}`).textContent=0;
currentScore=0;
activePlayer=activePlayer===0 ? 1 :0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active')};

// Roll btn
btnRoll.addEventListener('click',function(){
    if (playing){
    //Generating a random number 
   
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);

//displaying 
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;
// check for rolled 1 
if (dice!==1){
    currentScore=currentScore+dice
    // add dice to to current score 

    document.getElementById(`current--${activePlayer}`).textContent=currentScore
}

// switch to next player 

else {
   switchPlayer()
}}})
//button hold add current score 
btnHold.addEventListener('click',function(){
    scores[activePlayer]+=currentScore 
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    if (scores[activePlayer]>=100){ 
        playing=false 
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

    }else {
        switchPlayer();
        console.log(switchPlayer());}
switchPlayer();
// check score >=20

});
btnNew.addEventListener('click',init)
    // playing=true
    // currentScore=0
    // score0El.textContent=0
    // score1El.textContent=0
    // diceEl.classList.add('hidden')
    //  current0El.textContent=0
    //  current1El.textContent=0
    // activePlayer= 0;
    // player1El.classList.remove('player--active')
    // player1El.classList.remove('player--winner')
    // player0El.classList.add('player--active')
    // player0El.classList.remove('player--winner');
    //  scores =[0,0];
   
    
    console.log('Btn new ');


    // document.getElementById('score--1').textContent=0;
    // document.getElementById('score--0').textContent=0;




