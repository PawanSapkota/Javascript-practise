

const message =document.querySelector('.message');
const number =document.querySelector('.number');
const score1 =document.querySelector('.score');
const highscore1 =document.querySelector('.highscore');
const again =document.querySelector('.again')
document.querySelector('highscore');
let guess=document.querySelector('.guess').value;

let secretNumber = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore = 0;

// const displayMessage = function(message){
//     document.querySelector('.message') = message;
// }

document.querySelector('.check').addEventListener('click',function(){  
    loseGame(); 
})
 
const loseGame =function(){
    let guess =Number(document.querySelector('.guess').value);
    
    // When there is no input.
    if(!guess){
        // displayMessage('No Number');
        message.textContent ='No Match';
    }
    // When the player win.
    else if(guess === secretNumber){
        // displayMessage('Correct, You win the match')
        message.textContent ='Correct, You win the match';
        number.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor ='#60b347';
        number.style.width = '30rem'

        if (score > highscore){
            highscore = score;
            // document.querySelector('.highscore').textContent =highscore;
            highscore1.textContent=highscore;
        }
    }

    //when the  guess is wrong
    else if(guess !== secretNumber){
        if (score > 1){
            message.textContent =guess > secretNumber? 'Too High':'Too Low';
            score--;
            score1.textContent = score;
        }
        else{
            message.textContent ='You Lost The Game.';
            score1.textContent = '';            
        }
    }
    // When the guess is high
    // else if( guess > secretNumber){
    //     if( score > 1 ){
    //         message.textContent ='Too High';
    //         score--;
    //         score1.textContent = score;
    //     }else{
    //         message.textContent ='You lose the game.'
    //     }
    // }
    // // When the guess is low
    // else if( guess < secretNumber){
    //     if(score > 1){
    //         message.textContent='Too Low';
    //         score--;
    //         score1.textContent = score;
    //     }else{
    //         message.textContent ='You lose the game.'

    //     }
    // }
    // else if(!guess){
    //     message.textContent='No Match';
    // }
    
}
again.addEventListener('click',function(){
    score =20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    score1.textContent =score;
    message.textContent =`Start Guessing...`
    document.querySelector('body').style.backgroundColor='#222'
    number.textContent ='?';
    document.querySelector('.guess').value='';         
})