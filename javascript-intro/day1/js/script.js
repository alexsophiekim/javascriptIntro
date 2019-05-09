// console.log("Hello");  
// console.log("hello again");
// alert("after alert");
// console.log("after alert");

// console.log("thish is a string");
// console.log(10);
// console.log("10");

// console.log((5*95)-(10-4));


// console.log("string 1" + " string 2");
//
// var variable1 = 'this is now a string';
// var variable1 = "this is overide";
// // var Variable1;
// //
// // var function1;
// console.log(variable1);
//
// variable1 +="something else";
// console.log(variable1);
//
// var question = prompt("what is your name?");
// var secondQuestion = prompt("what is your fav colour?")
// console.log(question);
// console.log(secondQuestion);
// console.log("Hello "+question+" your fav colour is "+secondQuestion);
//
// var quiz = prompt("10+10-5=");
// var quiz2 = prompt("10+10-5=");
// console.log(quiz);
// console.log(quiz2);
// console.log("your first answer was "+quiz+" and your second answer was "+quiz2+", is that correct?");
//
// document.write("<h2 class='red'>"+question+"</h2>");



// var q1 = prompt("what time are you going to go bed?");
// document.write("<h2>what time are you going to go bed?</h2>");
// document.write("<h3>"+q1+"</h3>");
//
// var q2 = prompt("what is your fav food?");
// document.write("<h2>what is your fav food?</h2>");
// document.write("<h3>"+q2+"</h3>");
// var q3 = prompt("Do you like coffee?");
// document.write("<h2>Do you like coffee?</h2>");
// document.write("<h3>"+q3+"</h3>");
// var q4 = prompt("Cat person or dog person?");
// document.write("<h2>Cat person or dog person?</h2>");
// document.write("<h3>"+q4+"</h3>");
//
// document.write("<h2 class='blue'>You are going to go bed about "+q1+" and you like "+q2+" and do you like coffee? "+q3+" you are "+q4+"</h2>");
//

// var q1 = prompt("what time are you going to go bed?");
var q2 = prompt("what is your name?");
// document.getElementById("pageContainer").innerHTML = "<h2>What time are you going to go bed?</h2>";
// document.getElementById("pageContainer").innerHTML += "<h3>"+q1+"</h3>";

document.getElementById("heading").innerText = "Hello "+q2;


document.getElementById("yourName").innerText = ""+q2;


var q3 = prompt("what is your fav Colour?");
document.getElementById("yourColour").innerText = ""+q3;

var q4 = prompt("what is your fav food?");
document.getElementById("yourFood").innerText = ""+q4;
