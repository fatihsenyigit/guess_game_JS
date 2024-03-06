let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber)

let mesaj = document.querySelector(".msg");
const topScore = document.querySelector(".top-score");

let live = 10;
let highestScore = localStorage.getItem("top-score") || 0;
topScore.textContent = highestScore;

document.querySelector(".check").addEventListener("click", () => {
  const guessedNumber = document.querySelector(".guess").value;

  if (!guessedNumber) {
    mesaj.textContent = "please enter a number";
  } else if (guessedNumber == randomNumber) {
    mesaj.textContent = "Congratulations...👏 ";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".check").disabled = true;

    if (live > highestScore) {
      localStorage.setItem("top-score", live);
      highestScore = live;
      topScore.textContent = live;
    }
  } else {
    if (live > 1) {
      live--;
      document.querySelector(".score").textContent = live;
      guessedNumber < randomNumber
        ? (mesaj.textContent = "increase👆")
        : (mesaj.textContent = "decrease👇");
    } else {
      //! GAME OVER
      mesaj.textContent = "game over..🥺";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").onclick = () => {
    document.querySelector("body").style.backgroundColor = "#2d3436";
    randomNumber = Math.ceil(Math.random() * 20);
    console.log("new random", randomNumber)

    live = 10;

   document.querySelector(".score").textContent = live;

   document.querySelector(".number").textContent = "?";

   document.querySelector(".guess").value = "";

   mesaj.textContent = "new game... ";

   document.querySelector(".check").disabled = false;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.querySelector(".check").click();
  }
});

document.querySelector(".check").addEventListener("click", () => {
  let guess = document.querySelector(".guess").value;

  const guessedNumber = parseInt(guess);

  if (guessedNumber >= 1 && guessedNumber <= 20 && !isNaN(guessedNumber)) {
    //Doğru sayı girilmişse oyunu devam ettir
  } else {
    mesaj.textContent =
      "please enter a number between 0-20";
    live++;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "magenta";
  }
});
