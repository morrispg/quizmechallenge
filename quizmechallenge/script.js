var generateBtn = document.querySelector("#start-button");
var cardBox = document.querySelector(".card")
var questionBox = document.querySelector(".question-box")
var questionTitle = document.querySelector(".question-title")
var questionChoices = document.querySelector(".question-choices")
var currentQuestion = 0
var gameOver = document.querySelector(".Game Over")
var timer = 30

setInterval(function () {

	console.log(timer)
	timer = timer - 1
}, 1000);

localStorage.setItem("score", "50");
var score = localStorage.getItem("score");
console.log(score);

// Questions
var questions = [
	{
		title: "HTML Stands For",
		choices: ["Human Trophies in Militarized Louisiana", "Hyper Text Markup Language", "Huge Teenage Mutant Lizards", "Humongous Tyrannosaurous Meets Lady"],
		answer: "Hyper Text Markup Language"
	},
	{
		title: "CSS Stands For",
		choices: ["Cascading Style Sheets", "Carnivorous Sealion is Serious", "Corraling Sleepy Sheep", "Cringy Style Sheets"],
		answer: "Cascading Style Sheets"
	},
	{
		title: "Two Important Parts of JavaScript Are",
		choices: ["Caffeine and Optimism", "Guns and Ammo", "Objects and Arrays", "Puppies and Kittens"],
		answer: "Objects and Arrays"
	},
	{
		title: "API Stands For",
		choices: ["Aggressive Predatory Insect", "Annoying Parent Index", "Approachable Platypus is Ingenious", "Application Programming Interface"],
		answer: "choice2d"
	}
]
function checkAnswer() {
	console.log(this.dataset.value)
	if (this.dataset.value === questions[currentQuestion].answer) {
		currentQuestion++
		showQuestions()
	}
}
function showQuestions() {
	questionTitle.textContent = questions[currentQuestion].title
	questionChoices.textContent = ""
	for (let index = 0; index < questions[currentQuestion].choices.length; index++) {
		var button = document.createElement("button")
		button.textContent = questions[currentQuestion].choices[index]
		button.setAttribute("data-value", questions[currentQuestion].choices[index])
		button.addEventListener("click", checkAnswer)

		questionChoices.appendChild(button)

	}

}

function questionAnswers() {

}
function startQuiz() {
	cardBox.setAttribute("class", "hide");
	questionBox.classList.remove("hide");
};

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
	startQuiz();
	showQuestions();
});