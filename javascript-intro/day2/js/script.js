// console.log("hello");
// var value = 10;
// console.log(value + 2);
// console.log(value - 2);
// console.log(value * 2);
// console.log(value / 2);
//
// console.log(++value);
//
// //
// //
// // var newValue = value++;
// // console.log(newValue);
// console.log(--value);
//
// +=
// -=
// *=
// /=
//
// var inputNumber = prompt("please give me a number");
// // console.log(inputNumber); ////black number comes up - it's string///
// if (inputNumber > 6){
//   console.log(inputNumber + " is greater than 6");
// } else{
//   console.log(inputNumber + " is less than 6");
// }
//
// > grater than
// < less than
// >= greater than or equals
// <= less than or equals
//
// =
// == equals to
// === equals to and same data type
// != not equals
// !== not equal, or not same data type


// var randomNumber = prompt("please enter the number 6");
// if (randomNumber === "6"){
//   console.log("well done, you listened");
// } else{
//   console.log("you put in the wrong number");
// }


//
// var typeNumber = prompt("type the number 10");
// if (typeNumber == 10 ){
//   console.log("well done");
// } else{
//   console.log("try again");
// }

//
// When the child is under, or 5 there is no charge.
// For children who are older than 5 then the charge is $3.
// var age = prompt("How old is the child?");
// if (age > 5){
//   console.log("pay $3");
// } else{
//   console.log("free");
// }

//
// When the mark is more than 49 the person gets a A grade.
// When the mark is less the person gets an F grade.
// var markNumber = prompt("How many mark have you got?");
// if (markNumber < 49){
//   console.log("F grade");
// } else {
//   console.log("A grade");
// }

// var mark = prompt("what was your grade?")
// if(mark == 0){
//   console.log("fail")
// }
// if(mark <30){
//   console.log("fail")
// }
// if(mark<49){
//   console.log("you got an A")
// }

// if(mark ==0){
//   console.log("fail really bad");
// } else if(mark<30){
//   console.log("you failed but not so bad as 0");
// } else{
//   console.log("you have passed");
// }
//
// if(mark ==0){
//   console.log("you gota F");
// } else if(mark<30){
//   console.log("you got a C");
// } else if(mark<60){
//   console.log("you got a B");
// } else{
//   console.log("you have passed");
// }
//



// Write a grade calculator that give you a grade from your score between 0 and 100
// error when user adds a number lower than 0
// error when user adds a number grater than 100


// var mark = prompt("what was your grade?")
// if(mark > 0){
//   console.log("error, you must input a number greater than 0");
// } else if(mark >100){
//   console.log("error, you must input a number lass than 100");
// } else if(mark>=90){
//   console.log("you get an A");
// } else if(mark>=80){
//   console.log("you get a B");
// } else if (mark>=70){
//   console.log("you get a C");
// }



// If someone earns more than $100 they pay tax at 10% of gross.
// For less than this, tax is charged at 9% of gross.
// var earnMoney = prompt("How much have you earnt?")
// if (earnMoney >= 100){
//   console.log("your tax is $"+100/10);
// } else{
//   console.log("your tax is $"+100/9);
// }

//
// var earnMoney = prompt("How much have you earnt?")
// if (earnMoney >= 100){
//   var tax = earnings * 0.10;
//   console.log("your tax is $"+ tax + " tax");
// } else{
//   var tax = earnings *0.09;
//   console.log("your tax is $"+ tax + " tax");
// }

//
// var tax;
// if(earnings >100){
//   tax = earnings * 0.10;
// } else{
//   tax = earnings * 0.09;
// }
// console.log("you have to pay $" + tax + " tax");

//
//



// %  divided then remained number how many left over the number after divided
// console.log(10%2);
// console.log(10%3);
// console.log(10%4);
// console.log(10%5);
// console.log(10%6);





//
//
// When the cost of the meal is more than $100 there is no service charge.
// For other meals the service charge is 10%.
// There are 3 people at your table all ordering different meals (3 prompts)
// Show the price for all 3 and then the total.
//

//
// var mealPrice1 =prompt("how much cost for your meal?");
// var mealPrice2 =prompt("how much cost for your meal?");
// var mealPrice3 =prompt("how much cost for your meal?");
// var total = mealPrice1+mealPrice2+mealPrice3;
//
// console.log("your total bill is $"+total);
//


// var person1 = prompt("how much is person 1's meal?");
// if(person1 < 100){
//   var person1Service = person1 * 0.10;
//   var person1Total = parseInt(person1) + person1Service;
// } else {
//   var person1Total = parseInt(person1);
// }
// var person2 = prompt("how much is person 2's meal?");
// if(person2 < 100){
//   var person2Service = person2 * 0.10;
//   var person2Total = parseInt(person2) + person2Service;
// } else {
//   var person2Total = parseInt(person2);
// }
// var person3 = prompt("how much is person 3's meal?");
// if(person3 < 100){
//   var person3Service = person3 * 0.10;
//   var person3Total = parseInt(person3) + person3Service;
// } else {
//   var person3Total = parseInt(person3);
// }
//
// console.log("Person 1 Spends $" + person1Total);
// console.log("Person 2 Spends $" + person2Total);
// console.log("Person 3 Spends $" + person3Total);
//
// var total = person1Total + person2Total + person3Total;
// console.log("The total cost is $" +total);
//
//
// under code is same result with above code but minimized.


//
//
// var person1 = parseInt(prompt("how much is person 1's meal?"));
// if(person1 < 100){
//   person1 = (person1 * 0.10) + person1;
// }
// var person2 = parseInt(prompt("how much is person 2's meal?"));
// if(person2 < 100){
//   person2 = (person2 * 0.10) + person2;
// }
// var person3 = parseInt(prompt("how much is person 3's meal?"));
// if(person3 < 100){
//   person3 = (person1 * 0.10) + person3;
// }
// console.log("Person 1 Spends $" + person1);
// console.log("Person 2 Spends $" + person2);
// console.log("Person 3 Spends $" + person3);
// var total = person1 + person2 + person3;
// console.log("The total cost is $"+total);
//




//
// console.log("Person 1 Spends $" +person1Total);
// console.log("Person 2 Spends $" +person2Total);
// console.log("Person 3 Spends $" +person3Total);
// var



//
//
// if(totalMealPrice>=100){
//   console.log("you don't need to pay service charge");
// } else(mealPrice<99){
//   console.log("your service charge is $"+mealPrice*0.10);
// }
//


//
//
// A program is required to input 2 integer values
// and display a message indicating if oneis an exact
// divisor of the other (ie: the remainder is 0),
// eg: 4 divided by 2 = remainder 0



//
//
//
// Task 1:
// Coffees are $3.50 each, but if you order more than 10, you get a 15% discount.
// Write program that asks for the quantity and correctly calculates the total after discount.

var coffee = prompt("how many coffee are you going to order?");
var coffeePrice =coffee*3.50;
var totalDis = coffeePrice *0.15;
var total = coffeePrice-=totalDis;
if(coffee<10){
  console.log("you're total payment is $" +coffeePrice);
} else if(coffee>10){
  console.log("you're total payment is $"+total);
}



//
//
// Task2:
// Muffins are $2.35 each, but buy 10 or more they’re $2.10 each,
// but buy 25 or more and they’re $1.90 each.
// Accept quantity as an input, output the unit price and the total.
//
//
//
//
// Task 3:
// Steak dinners are $25.60 each, for every 2 full price steaks you get a third for free, (you will aways get the third)
// Get the quantity as input, and output the total price, and the number of free steaks!
//
//
//
//
//
//
// Bonus:
// Mushroom sauce is an extra $2, but the free steaks don’t get free sauce.
// Get the number of mushroom sauce servings as another input, and adjust the total.
