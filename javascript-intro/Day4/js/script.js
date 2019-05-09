// var shoppingList = ["Apples", "Bananas", "Pears", "Kiwi Fruit", "Oranges"];
// console.log(shoppingList);
//
document.write("<h1>This is my shopping list</h1>");
// document.write("<ul>");
// // console.log(shoppingList[0]);
//     document.write("<li> "+shoppingList[0]+" </li>");
//     document.write("<li> "+shoppingList[1]+" </li>");
//     document.write("<li> "+shoppingList[2]+" </li>");
//     document.write("<li> "+shoppingList[3]+" </li>");
//     document.write("<li> "+shoppingList[4]+" </li>");
// document.write("</ul>");


////---------looping------ same result simple way - bottom way.


document.write("<ul>");
var shoppingList = ["Apples", "Bananas", "Pears", "Kiwi Fruit", "Oranges"];
  for (var i = 0; i < shoppingList.length; i++){
    console.log(shoppingList[i]);
    document.write("<li> " + shoppingList[i] + " </li>")
  }


////---------------- i++ will be bottom situation -----------

  // var i = 0;
  // document.write("<li> " + shoppingList[i] + " </li>");
  // i++
  // document.write("<li> " + shoppingList[i] + " </li>");
  // i++
  // document.write("<li> " + shoppingList[i] + " </li>");
  // i++
  // document.write("<li> " + shoppingList[i] + " </li>");
  // i++
  // document.write("<li> " + shoppingList[i] + " </li>");
  // i++
document.write("</ul>");



var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var tasks = [
    ["Cleaning"],
    ["Homework", "Something else", "Shopping"],
    ["Work", "Gym"],
    [],
    ["Cleaning", "Go to the Park" ]
];

console.log(days[1]);
console.log(tasks[1][1])
console.log(tasks[1][2]);
console.log(days);
console.log(tasks);

document.write("<h2>Daily Tasks</h2>");

var noTasks = true;

document.write("<ul>");
    for (var i = 0; i < days.length; i++){
      document.write("<li>" + days[i]);
        document.write("<ul>");

          if (tasks[i].length === 0) {
              document.write("<li>Well done, you have no tasks today</li>");
          } else{
              for (var a = 0; a < tasks[i].length; a++){
                  document.write("<li>" +tasks[i][a]+ "</li>")
              }
          }
          // document.write("<li>Task 1</li>");
        document.write("</ul>");
      document.write("</li>");
    }
document.write("</ul>");
if (noTasks === true) {
    document.write("<h3>You have done all your tasks</h3>");
} else{
    document.write("<h3>You have left your tasks</h3>");
}




















///--------------------functions///
//
// namePrompt();
// namePrompt();


function namePrompt(){
  console.log("this is coming from namePrompt");
  var name = prompt("What is your name?");
  console.log("Hello "+name);
  document.getElementById("welcoming").innerHTML += "<h4>Hello " +name+ " ,welcome to the site.</h4>"
}
// function - block of code, can use multiple times.
