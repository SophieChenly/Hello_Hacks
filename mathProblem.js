function mathProblem()  {
    var max = 13
    var min = 1

    
    var firstNum = Math.floor(Math.random() * (max - min) + min)
    var secondNum = Math.floor(Math.random() * (max - min) + min)

    return firstNum*secondNum
}