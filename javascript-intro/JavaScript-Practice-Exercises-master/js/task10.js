// Create a password checker from a prompt which will check to see is a password is strong enough. Min 5 characters, max 20, 1 number


var password = prompt("create your password, min 5 characters, max 20 and 1 number");


for (var i = 0; i < password.length; i++) {
  if (password < 5) {
    console.log("make sure over 5 characters");
  } if (password > 20) {
    console.log("Too long! max 20");
  } else if (password != number {
    console.log("include 1 number");
  }
}
