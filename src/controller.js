var correctAnswer = 0
var setTime = 3
var pHP = 100
var bHP = 100

export function generateQuestions(showQuestion,winner,botHealth,playerHealth) {
    var timeRun = 0
    var interval = setInterval(multiplication,3000) 
        
        
    function multiplication()  {
        let max = 13
        let min = 1
        timeRun++

        if (timeRun === setTime){
            determineWinner(winner,botHealth,playerHealth) 
            clearInterval(interval)  
        }
        
        let firstNum = Math.floor(Math.random() * (max - min) + min)
        let secondNum = Math.floor(Math.random() * (max - min) + min)

        correctAnswer = firstNum*secondNum
        
        showQuestion.textContent = firstNum + " x " + secondNum;
        
      
    }

}

export function checkCorrect(answer,showRightWrong,botHealth,playerHealth)    {
    if (Number(answer) === correctAnswer)   {
        showRightWrong.textContent = "Correct"
        botHealth.textContent -= 10
        bHP -= 10
    }
    else    {
        showRightWrong.textContent = "Incorrect"
        playerHealth.textContent -= 10
        pHP -=10
    }

}

function determineWinner(winner)    {
    if (pHP > bHP)
        winner.textContent = "Player Wins!"
    else if (bHP < pHP)
        winner.textContent = "Bot Wins! HAHA"
    else if (bHP === pHP)
        winner.textContent = "TIE!"

}
