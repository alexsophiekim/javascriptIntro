//
// var hello;
//
//
// function onLoad(){
//   console.log("running onLoad function");
//   var hello ="hello there"
//   console.log(hello);
//   var name = prompt("what is your name?");
//   console.log(name);
// }
//
// onLoad();
// // onLoad();
// ////////////..... twice come up on the console.
//
// console.log(hello);
//
//
// function anotherFunction(){
//    console.log(name);
// }
//
//










///////////////////////////////////////..TASK..//////////////////////////////////////
// The site should ask the user for all the tasks they would like to do for each of
// the days in the week.
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var tasks =[];

for (var i = 0; i < days.length; i++){
  tasks.push([]);
}
var start = prompt("Do you have any tasks to do on "+days[0]+"?");


console.log(days);
console.log(tasks);




// var tasks = [
//     ["Cleaning"],
//     ["Homework", "Something else", "Shopping"],
//     ["Work", "Gym"],
//     [],
//     ["Cleaning", "Go to the Park" ]
// ];
//
// document.write("<h2>Daily Tasks</h2>");
// var ask = prompt("Do you have any tasks to do on "+days[0]+"?" );
//
// document.write("<ul>")
//   for (var i = 0; i < ask.length; i++){
//     if (ask == "no") {
//         prompt("Do you have any tasks to do on "+days[0+1]+"?");
//     } else if(ask == "yes") {
//         prompt("What is your task?");
//     } else{
//       prompt("type yes or no please");
//     }
// }



//
// document.write("<ul>");
//     for (var i = 0; i < days.length; i++){
//       document.write("<li>" + days[i]);
//         document.write("<ul>");
//
//           if (tasks[i].length === 0) {
//               document.write("<li>Well done, you have no tasks today</li>");
//           } else{
//               for (var a = 0; a < tasks[i].length; a++){
//                   document.write("<li>" +tasks[i][a]+ "</li>")
//               }
//           }
//           // document.write("<li>Task 1</li>");
//         document.write("</ul>");
//       document.write("</li>");
//     }
