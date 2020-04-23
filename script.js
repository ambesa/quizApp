//Function to count correct answers and print results to document 
function myFunction() {

    //Create variable to count correct answers 
    var correctAnswers = 0;

    //Create variables for each question's input value
    var q1 = document.getElementById("q1c").checked;

    var q2 = document.getElementById("q2f").checked;
    var q3 = document.getElementById("q3a").checked;
    var q4 = document.getElementById("q4d").checked;
    var q5 = document.getElementById("q5e").checked;
    var q6 = document.getElementById("q6d").checked;
    var q7 = document.getElementById("q7c").checked;
    var q8 = document.getElementById("q8a").checked;
    var q9 = document.getElementById("q9e").checked;
    var q10 = document.getElementById("q10f").checked;
    var q11 = document.getElementById("q11d").checked;
   var q12 = document.getElementById("q12d").checked;
    var q13 = document.getElementById("q13a").checked;
   var q14 = document.getElementById("q14a").checked;
    var q15 = document.getElementById("q15d").checked;
    var q16 = document.getElementById("q16d").checked;
    var q17 = document.getElementById("q17b").checked;
    var q18 = document.getElementById("q18f").checked;
    var q19 = document.getElementById("q19c").checked;
    var q20 = document.getElementById("q20b").checked;

    //Assign correct answers to field inputs
      if (q1) {
        correctAnswers += 1;
    } if (q2) {
        correctAnswers += 1;
    } if (q3) {
        correctAnswers += 1;
    }
     if (q4) {
        correctAnswers += 1;
    } if (q5) {
        correctAnswers += 1;
    } if (q6) {
        correctAnswers += 1;
    } if (q7) {
        correctAnswers += 1;
    } if (q8)  {
        correctAnswers += 1;
    }  if (q9) {
        correctAnswers += 1;
    }  if (q10) {
        correctAnswers += 1;
    } if (q11) {
        correctAnswers += 1;
    } if (q12) {
        correctAnswers += 1;
    } if (q13) {
        correctAnswers += 1;
    }  if (q14) {
        correctAnswers += 1;
    }  if (q15) {
        correctAnswers += 1;
    } 
     if (q16) {
        correctAnswers += 1;
    } 
    if (q17) {
        correctAnswers += 1;
    }  if (q18) {
        correctAnswers += 1;
    }  if (q19) {
        correctAnswers += 1;
    }  if (q20) {
        correctAnswers += 1;
    }

         //Print results (and statement) to document, dependant on outcome
         if (correctAnswers === 20) {
        document.getElementById("result").innerHTML = "Congratulations! You got all 20 answers correct";}
    else if (correctAnswers >= 15) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 10) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";}
    else if (correctAnswers === 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got 1 answer correct";}
    else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";}

        //Print correct answers to form
        document.getElementById("answers").innerHTML = "Correct answers: (1) C-27 (2)F- All of them  (3) A- All people of the state (4) D- Choice  A ,B AND C are correct <br> (5)E- All of them are correct (6)D- Choice A and B are correct (7)C-435 (8)the Speaker of the House(9)E-All the  choices are correct (10) F- Choice A,B and C are correct (11) D-  Choice A and B only are correct (12) D- ALL the choices are correct (13) A- (Thomas) Jefferson (14) A-New Jersey(15) D- all of the choices are correct (16)D- all of the above correct  (17)B- Woodrow Wilson (18) F-  Choice A ,B and E are correct (19)C- Japan (20) B-Minnesota";

        //Reset contents of form
        document.getElementById("quiz-form").reset();
}


