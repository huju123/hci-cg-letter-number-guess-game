const display = document.getElementById("display");
const letterBtn = document.getElementById("letterBtn");
const numberBtn = document.getElementById("numberBtn");
const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");

let currentChar = "";
let gameRunning = false;

// Generate random letter or number
function generateRandom() {
  const isLetter = Math.random() < 0.5;

  if (isLetter) {
    // Random uppercase letter
    const charCode = Math.floor(Math.random() * 26) + 65;
    currentChar = String.fromCharCode(charCode);
  } else {
    // Random number 0–9
    currentChar = Math.floor(Math.random() * 10).toString();
  }

  display.textContent = currentChar;
}

// Start / Stop game
startBtn.addEventListener("click", () => {
  gameRunning = !gameRunning;

  if (gameRunning) {
    startBtn.textContent = "Finish";
    result.textContent = "";
    generateRandom();
  } else {
    startBtn.textContent = "Start";
    display.textContent = "?";
    result.textContent = "Game Stopped";
  }
});

// Letter button
letterBtn.addEventListener("click", () => {
  if (!gameRunning) return;

  if (isNaN(currentChar)) {
    result.textContent = "✅ Correct! It's a Letter";
  } else {
    result.textContent = "❌ Wrong! It's a Number";
  }

  generateRandom();
});

// Number button
numberBtn.addEventListener("click", () => {
  if (!gameRunning) return;

  if (!isNaN(currentChar)) {
    result.textContent = "✅ Correct! It's a Number";
  } else {
    result.textContent = "❌ Wrong! It's a Letter";
  }

  generateRandom();
});
