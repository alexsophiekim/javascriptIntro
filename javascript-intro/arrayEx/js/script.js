// Create a site for a shopping list, when you click on a button you will be prompt to input a value.
// That value should then appear inside of a list on your html.
// It should also get added to an array which gets consoled every time you click the button as well


$(document).ready(function(){
  $('#add').click(function(){
    var item = prompt("Add your shopping list item.")
    document.getElementById("list").innerHTML += item;

  })

});


//
// function shoppingPrompt(){
//   var shoppingList = prompt("Shopping");
//   console.log(shoppingList);
//   document.getElementById("list").innerHTML += "<h4> " +shoppingList+ " </h4>"
// }


var list = ["Apples", "Eggs", "Oranges", "Chips", "Cheeses", "Milk"]
