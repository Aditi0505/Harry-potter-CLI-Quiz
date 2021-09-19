let input = require("readline-sync");
const chalk = require('chalk');
let score =0;
let flag=0;
const userName = input.question(chalk.blue("May I have your name? "));
console.log(chalk.bgYellow("Welcome ",userName, " to WHAT THE POTTER quiz!"))
// highscores 
var highScores = [
  {
    name : "Aditi",
    score : "4"
  },
    {
    name : "Ananya",
    score : "3"
  }
]
// questions list of objects
const questions =[
{
question: chalk.magenta("Harry's scar is of what shape? "),
choices : ['Like a lightning bolt','Like a shining star', 'Like a tail', 'Like an egg'],
answer: "Like a lightning bolt"
},
{
question: chalk.magenta("What job do Hermione's parents do? "),
choices : ['Physician', 'Tailor', 'Dentists', 'Mechanic'],
answer: "Dentists"
},
{
question: chalk.magenta("What does Hagrid name his baby dragon? "),
choices : ['Fluffy', 'Hedwig', 'Dragonly', 'Norbert'],
answer: "Norbert"
},
{
question: chalk.magenta("Dobby is a ? "),
choices : ['Goblin', 'House-elf', 'Centaur', 'Three-headed dog'],
answer: "House-elf"
},
{
question: chalk.magenta("Which Weasley brother marries former Beauxbatons student Fleur Delacour? "),
choices : ['Fred', 'Charlie', 'Percy', 'Bill'],
answer: "Bill"
}
]

// main game function
function play(choices,question,answer){
 const userAnswerIndex= input.keyInSelect(choices,question);
  if(choices[userAnswerIndex] === answer){
    console.log(chalk.bgGreen("You are correct!"));
    score += 1;
  }
  else{
    console.log(chalk.bgRed("Sorry, You are wrong!"));
    score -= 1;
  }
  console.log(chalk.blue("Your current score is :" ,score));
  console.log("-----------------------");
}

for(let i=0;i<questions.length;i++){
  play(questions[i].choices,questions[i].question,questions[i].answer);
}
console.log(chalk.bgBlue("Your final score is: ", score));
console.log(chalk.yellow("Following are the High scores :"))
for(let i=0;i<highScores.length;i++){
  console.log(chalk.red(highScores[i].name), chalk.red(":"), chalk.green(highScores[i].score))
  if(score > highScores[i].score){
    flag +=1;
  }
}
if(flag > 0){
  console.log(chalk.bgCyan("Congratulations! You have beaten the high score. Send me a screenshot of your score so that I can update it."))
}
