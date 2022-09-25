import {
  createPeople,
  readPeople,
  deletePeople
} from "./dataController.js"
import {
  checkCorrect,
  generateQuestions,
  setUserName,
} from "./controller.js"

const showResult = document.getElementById("result")
const showQuestion = document.getElementById("mathProblem")
const showRightWrong = document.getElementById("showRightWrong")
const playerHealth = document.getElementById("playerHealth")
const botHealth = document.getElementById("botHealth")
const winner = document.getElementById("winner")
const scoreGain = document.getElementById("scoreGain")
const answer = document.getElementById("answer")
const userNameButton = document.getElementById("userNameButton")
const userNameField = document.getElementById("userName")

const createPeopleForm = document.getElementById("createPeopleForm")
const showScores = document.getElementById("showScores")
const deletePeopleForm = document.getElementById("deletePeopleForm")
const button = document.getElementById("button")
const enterAnswer = document.getElementById("enterAnswer")

createPeopleForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const result = createPeople(formProps);
  showResult.innerHTML = JSON.stringify(result, null, 2);
})

showScores.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const result = readPeople(formProps);
  showResult.innerHTML = JSON.stringify(result, null, 2);
})

deletePeopleForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const result = deletePeople(formProps);
  showResult.innerHTML = JSON.stringify(result, null, 2);
})

button.addEventListener("click",function (event){
  event.preventDefault();

  generateQuestions(showQuestion,winner,scoreGain)


})

enterAnswer.addEventListener("click", function(event) {
  event.preventDefault();
  
  checkCorrect(answer.value,showRightWrong,botHealth,playerHealth)
 
})

userNameButton.addEventListener("click",function(event){
  event.preventDefault();

  setUserName(userNameField.value)
})