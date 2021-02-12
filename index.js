// Determine player 1 roll
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let dice1 = `images/dice${randomNumber1}.png`;

// Determine player 2 roll
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let dice2 = `images/dice${randomNumber2}.png`;

// Display roll
document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

// Determine and display winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
