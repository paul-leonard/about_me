'use strict';

/* Guessing Game about Paul
Lab02 Feature Task List:  *****************************************************
- need 5 yes/no questions
- accept y/n; yes/no answers
- answers are not case sensitive
- alert a response to let the user know if they got the question correct
- - console.log() messages during development
- - - comment out the console.log()'s prior to code submission
- - - add in alert()'s to replace the functionality of the conosole.log()'s
- ask the user their name
- personal greeting
- personal goodbye

Question Plan:
Q1: Does Paul like cookies?
Q2: Does Paul like ice cream?
Q3: Does Paul like airplanes?
Q4: Does Paul like backpacking?
Q5: Does Paul like fishing?

Program Layout:
- Welcome, what's your name?
- 5 questions
- Personal Goodbye

Layout repeated for each question:
- prompt user with a question
- get answer
- change answer to all lower case
- use if/else statements to determine if the answer was correct
- use logical ORs because answers could come in any case and will be the form of yes/no/y/n
- output a response to user with alert() function


Lab03 Feature Task List:  *****************************************************
- update README
- create top ten ordered list at bottom
- convert work experience section to be an unordered list
- convert education section to be an unordered list
- 6th question to guess a numerical answer
-- (What was Paul's rec league hockey jersey number? 22)
-- give too high and too low hints
-- provide 4 chances to get it right
--- if incorrect after 4, tell them the correct
--- consider using a loop
- 7th question to guess a categorical question/answer with multiple correct answers available
-- (Can you guess one of Paul's favorite 3 fruits from this list?)
-- give the user 6 attempts
-- guesses end if answer is right or out of guesses
-- display all correct answers at end
-- consider using a loop
- tally and report quiz score
- use console.log()'s for trouble shooting
- improve CSS
- 3 stretch goals available

*/



// Ask User their name
var userName = prompt('Hello and welcome to the site!  With whom do I have the pleasure of speaking with?');

var totalCorrectAns = 0;


// Guessing game about me; starting with a personal greeting
// *****QUESTION 1*****  Personal greeting and question 1
var ans1LikeCookies = prompt('Hi, ' + userName + '!  Does Paul, the site owner, like cookies?');

//convert the answer to lowercase to make non-case sensitive
var ans1LowerLikeCookies = ans1LikeCookies.toLowerCase();
// https://www.w3schools.com/jsref/jsref_tolowercase.asp helped me learn how to use this function.

//if elses to determine response
if(ans1LowerLikeCookies === 'y' || ans1LowerLikeCookies === 'yes'){
  //console.log('You\'re right!  Paul does love cookies!  Don\'t forget the milk!');
  alert('You\'re right!  Paul does love cookies!  Don\'t forget the milk!');
  totalCorrectAns++;
} else if (ans1LowerLikeCookies === 'n' || ans1LowerLikeCookies === 'no'){
  //console.log('Who doesn\'t like cookies?!?  Paul loves cookies.  I\'m sorry if you don\'t :(');
  alert('Who doesn\'t like cookies?!?  Paul loves cookies.  I\'m sorry if you don\'t :(');
} else {
  //console.log('Quit messing around:)');
  alert('Quit messing around:)');
}




// *****QUESTION 2*****
var ans1LikeIceCream = prompt('If you offered Paul some ice cream, would he take it?');

//convert the answer to lowercase to make non-case sensitive
var ans1LowerLikeIceCream = ans1LikeIceCream.toLowerCase();

//if elses to determine response
if(ans1LowerLikeIceCream === 'y' || ans1LowerLikeIceCream === 'yes'){
  //console.log('You bet he would!  Especially if it is served with cookies!');
  alert('You bet he would!  Especially if it is served with cookies!');
  totalCorrectAns++;
} else if (ans1LowerLikeIceCream === 'n' || ans1LowerLikeIceCream === 'no'){
  //console.log('Paul worked at Baskin Robbins and once ate a half gallon of ice cream.  He didn\'t like ice cream the next day... but does again now!');
  alert('Paul worked at Baskin Robbins and once ate a half gallon of ice cream.  He didn\'t like ice cream the next day... but does again now!');
} else {
  //console.log('Quit messing around:)');
  alert('Quit messing around:)');
}




// *****QUESTION 3*****
var ans1LikeAirplanes = prompt('Does Paul like airplanes?');

//convert the answer to lowercase to make non-case sensitive
var ans1LowerLikeAirplanes = ans1LikeAirplanes.toLowerCase();

//if elses to determine response
if(ans1LowerLikeAirplanes === 'y' || ans1LowerLikeAirplanes === 'yes'){
  //console.log('You\'re right, Paul has a passion for aviation.  He spent years working at Boeing and has attended countless airshows.');
  alert('You\'re right, Paul has a passion for aviation.  He spent years working at Boeing and has attended countless airshows.');
  totalCorrectAns++;
} else if (ans1LowerLikeAirplanes === 'n' || ans1LowerLikeAirplanes === 'no'){
  //console.log('Paul actually likes airplanes!  He earned his private pilot certificate in 2005 and has spent a lot of time around airplanes.');
  alert('Paul actually likes airplanes!  He earned his private pilot certificate in 2005 and has spent a lot of time around airplanes.');
} else {
  //console.log('Quit messing around:)');
  alert('Quit messing around:)');
}




// *****QUESTION 4*****
var ans1LikeBackpacking = prompt('Would Paul enjoy a 3 day weekend 7 miles into the woods?');

//convert the answer to lowercase to make non-case sensitive
var ans1LowerLikeBackpacking = ans1LikeBackpacking.toLowerCase();

//if elses to determine response
if(ans1LowerLikeBackpacking === 'y' || ans1LowerLikeBackpacking === 'yes'){
  //console.log('Someone remembered to pack a hammock, right!?  Paul loves going backpacking and relaxing in the woods.');
  alert('Someone remembered to pack a hammock, right!?  Paul loves going backpacking and relaxing in the woods.');
  totalCorrectAns++;
} else if (ans1LowerLikeBackpacking === 'n' || ans1LowerLikeBackpacking === 'no'){
  //console.log('Paul actually enjoys going backpacking and spending time in nature.');
  alert('Paul actually enjoys going backpacking and spending time in nature.');
} else {
  //console.log('Quit messing around:)');
  alert('Quit messing around:)');
}




// *****QUESTION 5*****
var ans1LikeFishing = prompt('How about fishing?  Does Paul like fishing?');

//convert the answer to lowercase to make non-case sensitive
var ans1LowerLikeFishing = ans1LikeFishing.toLowerCase();

//if elses to determine response
if(ans1LowerLikeFishing === 'n' || ans1LowerLikeFishing === 'no'){
  //console.log('That\'s right.  Paul isn\'t too big of a fan of fishing.  However... with a little more exposure to fishing, maybe he would change his mind.');
  alert('That\'s right.  Paul isn\'t too big of a fan of fishing.  However... with a little more exposure to fishing, maybe he would change his mind.');
  totalCorrectAns++;
} else if (ans1LowerLikeFishing === 'y' || ans1LowerLikeFishing === 'yes'){
  //console.log('Paul actually doesn\'t like fishing that much.  But he hasn\'t had that much exposure to it.  Maybe if he goes he\'ll learn to like it!');
  alert('Paul actually doesn\'t like fishing that much.  But he hasn\'t had that much exposure to it.  Maybe if he goes he\'ll learn to like it!');
} else {
  //console.log('Quit messing around:)');
  alert('Quit messing around:)');
}










//This section provides feedback to the user to let them know how well they did on the quiz.

switch (totalCorrectAns) {
case 7:
  alert('Wow!  You know Paul very well!  Perfect Score!  7 out of 7:)');
  break;
case 6:
  alert('Near perfect!  6 out of 7!');
  break;
case 5:
  alert('Pretty good!  You got 5 out of 7!');
  break;
case 4:
  alert('You got 4 out 7.  I bet you can do better next time!');
  break;
case 3:
case 2:
case 1:
case 0:
  alert('You were only able to get ' + totalCorrectAns + ' answer(s) correct out of 7.  Hopefully you got to know me better and will get more correct next time.');
  break;
default:
  alert('Error in score tally.');
  break;
}
// This W3 page helped me understand how to have multiple cases share the same conditional code block:  https://www.w3schools.com/js/js_switch.asp


// Personal goodbye to the user
alert('I really enjoyed talking with you today, ' + userName + '.  I hope we get to chat again soon!  And next time I\'ll have to learn more about you!');
