let nombreSecret = Math.floor(Math.random() * 100) + 1;
let essais = 0;

document.getElementById("check").addEventListener("click", () => {
  const guess = Number(document.getElementById("guess").value);
  const message = document.getElementById("message");
  const attempts = document.getElementById("attempts");

  essais++;

  if (guess < 1 || guess > 100 || isNaN(guess)) {
    message.textContent = "⛔ Entre un nombre entre 1 et 100 !";
  } else if (guess < nombreSecret) {
    message.textContent = "🔼 Trop petit !";
  } else if (guess > nombreSecret) {
    message.textContent = "🔽 Trop grand !";
  } else {
    message.textContent = `🎉 Bravo ! Le nombre était ${nombreSecret}.`;
  }

  attempts.textContent = `Essais : ${essais}`;
});

document.getElementById("reset").addEventListener("click", () => {
  nombreSecret = Math.floor(Math.random() * 100) + 1;
  essais = 0;
  document.getElementById("guess").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Essais : 0";
});
