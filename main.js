let paragraph = document.createElement("p")
let userAge = parseInt(prompt("Enter your age").trim(), 10);
let defaultage = 16;

if (userAge >= defaultage) {
  console.log("You are welcome!");
  paragraph.textContent = "You are welcome!";
  document.body.append("You are welcome!")
  document.body.style.backgroundColor = "green"
}

else {
  console.log("Your age did not match");
  paragraph.textContent = "Your age did not match";
  document.body.append("Your age did not match")
  document.body.style.backgroundColor = "red"

}