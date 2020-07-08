'use strict';

/* Guessing Game about Paul
Feature Task List:
- need 5 yes/no questions
- accept y/n; yes/no answers
- answers are not case sensitive
- alert a response to let the user know if they got the question correct
- - console.log() messages during development
- - - comment out the console.log()'s prior to code submission
- - - add in alert()'s to replace the functionality of the conosole.log()'s
- ask the user their name
- personal greeting
-personal goodbye

New Question Plan:
Q1: Does Paul like cookies?
Q2: Does Paul like ice cream?
Q3: Does Paul like airplanes?
Q4: Does Paul like backpacking?
Q5: Does Paul like fishing?

Old Question Plan:
Q1: Do you know Paul?
Q2: Do you like eating ice cream?
Q3: Do you like airplanes?
Q4: Do you go backpacking?
Q5: Do you like learning new skills?
*/

// Ask User their name
var userName = prompt('Hello and welcome to the site!  With whom do I have the pleasure of speaking with?')

// Guessing game about me; starting with a personal greeting

// *****QUESTION 1*****  Personal greeting and question 1
var ans1LikeCookies = prompt('Hi, ' + userName + '!  Does Paul, the site owner, like cookies?');

//convert the answer to lowercase to make non-case sensitive
var ans1LowerLikeCookies = ans1LikeCookies.toLowerCase();
// https://www.w3schools.com/jsref/jsref_tolowercase.asp helped me learn how to use this function.

//if elses to determine response
if(ans1LowerLikeCookies === 'y' || ans1LowerLikeCookies === 'yes'){
  console.log('You\'re right!  Paul does love cookies!  Don\'t forget the milk!');
  //alert('copy from the console.log() when ready)
} else if (ans1LowerLikeCookies === 'n' || ans1LowerLikeCookies === 'no'){
  console.log('Who doesn\'t like cookies?!?  Paul loves cookies.  I\'m sorry if you don\'t :(');
  //alert('copy from the console.log() when ready)
} else {
  console.log('Quit messing around:)');
  //alert('copy from the console.log() when ready)
}




//case structure for responses




// Personal goodbye to the user
alert('I really enjoyed talking with you today,' + userName + '.  I hope we get to chat again soon!  And next time I\'ll have to learn more about you!');
