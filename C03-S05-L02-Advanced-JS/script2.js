console.log('Assesment')


//--- lets build a fun quiz game in the console! ---
//1. Build a function constructor called Question to describe a question. A question should include:
//a) the actual question
//b) the answer from which the player can choose the correct one (choose an adequate data structure here, array, obcect, ect.)
//c) correct answer (I would use a number for this)

function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

//2. Create a couple of questions using the constructor
//
var ques1 = new Question('What is my name? ', ['Annette', 'Pienkie', 'Ponkie'], 0);
var ques2 = new Question('What is my age? ', [32, 42, 22], 1);
var ques3 = new Question('What color is my eyes? ', ['Blue', 'Brown', 'Green'], 2);

//3. Store them all inside an array
// 
var questions  = [ques1, ques2, ques3]

//4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question object for this task).
//
var n = Math.floor(Math.random() * questions.length);

Question.prototype.displayQuestion = function(){
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++ ){
        console.log(i + ': ' + this.answers[i]);
    }  
}

questions[n].displayQuestion();


//5. Use the 'prompt' function to ask the user for the correct answer. The user should imput the number of the correct answer such as you displayed it on Task 4.
//
//6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this)
//
//7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the othr programmers code (Hint: we learned a special technique to do exactly that)
//
//--- Expert level ---
//8. After you display the result, display the next question, so that the game never ends (Hint: write a function fot this and call it right after displaying the result)
//
//9. Be carful: after Task 8, the game literally never ends. so include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from Task 8.
//
//10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of clisures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
//
//11. Display the score in the console. use yet another method for this.
