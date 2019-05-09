
//
//
// Task 1:
// Coffees are $3.50 each, but if you order more than 10, you get a 15% discount.
// Write program that asks for the quantity and correctly calculates the total after discount.
<<<<<<< HEAD
//
=======

>>>>>>> 1f26c4aa16685230451b758ef06be39956a5ce63
// var coffee = prompt("how many cup of coffee are you going to order?");
// var coffeePrice =coffee * 3.50;
// var dis =  coffeePrice * 0.15;
// var total = coffeePrice-dis;
// if(coffee<10){
//   console.log("your total payment is $" +coffeePrice);
// } else if(coffee>=10){
//   console.log("your total payment is $"+total);
// }
//
// document.getElementById("coffeePrice").innerHTML = coffeePrice;
//
<<<<<<< HEAD
=======
// //
>>>>>>> 1f26c4aa16685230451b758ef06be39956a5ce63




//
<<<<<<< HEAD
// var coffeePrice = 3.50;
// var order = parseInt(prompt("how many coffees are you ordering?"));
// var total;
// console.log(order);
// if(order>=10){
//   total = coffeePrice * order;
//   var dis = total * 0.15;
//   console.log(dis);
//   total = total - dis;
// } else{
//  total = coffeePrice * order;
// }
// console.log(total);


//
=======
>>>>>>> 1f26c4aa16685230451b758ef06be39956a5ce63
// Task2:
// Muffins are $2.35 each, but buy 10 or more they’re $2.10 each,
// but buy 25 or more and they’re $1.90 each.
// Accept quantity as an input, output the unit price and the total.
//
//

<<<<<<< HEAD
//
// var muffins = prompt("How many muffins did you get?");
// var muffinsPrice = muffins * 2.35;
// var tenOver = muffins * 2.10;
// var tweentyfiveOver = muffins * 1.90;
// if (muffins <10){
//   console.log("You buy "+muffins+" muffins. Your total payment is $" +muffinsPrice);
// } else if(muffins=>10){
//   console.log("You buy "+muffins+" muffins.Your total payment is $" +tenOver);
// } else  {
//   console.log("You buy "+muffins+" muffins.Your total payment is $" +tweentyfiveOver);
// }

///duplicate quantity rage/////

//
//
// var muffins = parseInt(prompt("how many muffins are you ordering?"));
// console.log(muffins);
// var muffinsPrice;
// if(muffins < 10){
//   muffinsPrice = 2.35;
// } else if(muffins <25 ){
//   muffinsPrice = 2.10;
// } else{
//   muffinsPrice = 1.90;
// }
// var total = muffins * muffinsPrice;
// console.log(total);




// document.getElementById("muffins").innerHTML = muffins;
=======

var muffins = prompt("How many muffins did you get?");
var muffinsPrice = muffins * 2.35;
var tenOver = muffins * 2.10;
var tweentyfiveOver = muffins * 1.90;
if (muffins <10){
  console.log("You buy "+muffins+" muffins. Your total payment is $" +muffinsPrice);
} else if(muffins=>10){
  console.log("You buy "+muffins+" muffins.Your total payment is $" +tenOver);
} else if(muffins=>25){
  console.log("You buy "+muffins+" muffins.Your total payment is $" +tweentyfiveOver);
}

///duplicate quantity rage/////



document.getElementById("muffins").innerHTML = muffins;
>>>>>>> 1f26c4aa16685230451b758ef06be39956a5ce63
// document.getElementById("MuffinsTotal").innerHTML = ;


//
//
// Task 3:
// Steak dinners are $25.60 each, for every 2 full price steaks you get a third for free, (you will aways get the third)
// Get the quantity as input, and output the total price, and the number of free steaks!

<<<<<<< HEAD
var steak = parseInt(prompt("How many steak dishes would you want to order?"));
var steakPrice = 25.60;
var freeSteak, totalSteak, totalPrice;

// if (steak == 0) {
//   console.log("please get out");
// }

if (steak % 3 === 0) {
  freeSteak = steak / 3;
  totalSteak = steak;
} else {
  var remainder = steak % 3;
  var paid = steak - remainder;
  totalSteak = steak;
  freeSteak = paid /3;
  if (remainder===2) {
    console.log("you get a free steak no matter what");
    totalSteak++;
    freeSteak++;
  }
  console.log(remainder);
}
  totalPrice = (totalSteak - freeSteak) * steakPrice;
console.log("you have ordered " + totalSteak + " of steaks")
console.log("You get "+ freeSteak + " free Steaks")
console.log("Your total price is $" +totalPrice);

// Bonus:
// Mushroom sauce is an extra $2, but the free steaks don’t get free sauce.
// Get the number of mushroom sauce servings as another input, and adjust the total.


var sauce = parseInt(prompt("How many mushroom sauce do you want to order?"));
var saucePrice =2;
allPrice = (sauce * 2) +totalPrice;
console.log("You have ordered " +sauce+ " sauces.")
console.log("Your included sauce total price will be $" +allPrice);
=======

var steak = prompt("How many steak dishes would you want to order?");



//
//
//
// Bonus:
// Mushroom sauce is an extra $2, but the free steaks don’t get free sauce.
// Get the number of mushroom sauce servings as another input, and adjust the total.
>>>>>>> 1f26c4aa16685230451b758ef06be39956a5ce63
