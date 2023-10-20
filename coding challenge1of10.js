console.log('coding challenge 10');

const poll={
    
    question:'What is your favourite programming language?',
    options:['0:Javascript','1:Python','2:Rust','3:C++'],
    answers:new Array(4).fill(0),  
    registerNewAnswer(){   

        //Get answer     
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n Write your input Number`));
        console.log(answer)

        //Resgister Answer
        typeof answer==='number' && answer < this.answers.length && this.answers[answer]++;
        
        this.displayResult();
        this.displayResult('string')
    },
    displayResult(type='array'){
      if (type === 'array'){
        console.log(this.answers)
      }
      else if(type==='string'){
        console.log(`Polls are ${this.answers.join(', ')}`)
      }
    },


}

document.querySelector('.btn').addEventListener('click',poll.registerNewAnswer.bind(poll))
poll.displayResult.call({answers:[5,2,3]},'string')



