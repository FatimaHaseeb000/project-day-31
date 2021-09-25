var scoreOne,scoreTwo,randNum,message;
var sumOne=0,sumTwo=0;
scoreOne=document.getElementById('playerOneScore');
scoreTwo=document.getElementById('playerTwoScore');
diceOne=document.getElementById('playerOneDice');
diceTwo=document.getElementById('playerTwoDice');
var playerOneTurn=true;

var msg=document.getElementById('message');
rollBtn=document.getElementById('rollDiceBtn');
reset=document.getElementById('resetBtn');

resetBtn.addEventListener('click',function(){resetFtn();});
function resetFtn(){
    console.log('reset ftn')
    sumOne=0;
    scoreOne=0;
    diceOne.textContent='-';
    sumTwo=0;
    scoreTwo=0;
    diceTwo.textContent='-';
    msg.textContent='Player 1 turn'
    diceOne.classList.add('active');
    diceTwo.classList.remove('active')
    reset.style.display='none';
    rollBtn.style.display='block';

}
function showResetBtn(){
    console.log('reset')
    rollBtn.style.display='none';
    reset.style.display='block';
 
}
function score(){
    randNum=(Math.floor((Math.random())*6))+1;
    if(playerOneTurn){
        console.log('p1')
        
        sumOne+=randNum;
        console.log(sumOne+'  '+randNum)
        scoreOne.textContent=sumOne;
        diceOne.textContent=randNum;
        diceOne.classList.remove('active');
        diceTwo.classList.add('active')
        msg.textContent='Player 2 Turn'
        }
    else{
        console.log('p2')
        sumTwo+=randNum;
        console.log(sumTwo+' '+randNum)
        scoreTwo.textContent=sumTwo;
        diceTwo.textContent=randNum;
        diceOne.classList.add('active');
        diceTwo.classList.remove('active')
        msg.textContent='Player 1 turn'
    }
    if(sumOne>=20){
        console.log('1 won')
        msg.textContent='Player 1 has won!'
        
        rollBtn.style.display=false;
        reset.style.display=true
        showResetBtn();
    }
    else if(sumTwo>=20){
        console.log('2 won')
        msg.textContent='Player 2 has won!'
        rollBtn.display=false;
        reset.display=true;
        showResetBtn();
    }
    playerOneTurn= !playerOneTurn;
}
