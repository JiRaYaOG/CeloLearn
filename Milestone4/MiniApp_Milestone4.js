// Wallet
function showWallet() {
  document.getElementById("wallet").innerText = "Test Wallet: 0x1234...ABCD";
}

function simulateTransaction() {
  document.getElementById("transaction").innerText = "Transaction simulated: 10 cUSD sent!";
}

// Tutoriels
const tutorials = [
  "Tutorial 1: How to create and manage a Celo Wallet",
  "Tutorial 2: Understanding Stablecoins on Celo",
  "Tutorial 3: Deploying Smart Contracts on Celo"
];

function showTutorials() {
  const container = document.getElementById("tutorials");
  container.innerHTML = ""; // reset
  tutorials.forEach((tut, index) => {
    const p = document.createElement("p");
    p.innerText = `${index + 1}. ${tut}`;
    container.appendChild(p);
  });
}

// Quiz
const quiz = [
  { question: "What is Celo?", answer: "A blockchain platform focused on mobile users" },
  { question: "What is cUSD?", answer: "Celo Dollar stablecoin" },
  { question: "How do you deploy a smart contract on Celo?", answer: "Using the Celo CLI or Remix IDE" }
];

function showQuiz() {
  const container = document.getElementById("quiz");
  container.innerHTML = "";
  quiz.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${index + 1}. ${q.question}</p>
                     <p><em>Answer: ${q.answer}</em></p>`;
    container.appendChild(div);
  });
}
