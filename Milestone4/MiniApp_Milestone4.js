// ===== Wallet =====
function showWallet() {
  document.getElementById("wallet").innerText = "Test Wallet: 0x1234...ABCD";
}

function simulateTransaction() {
  document.getElementById("transaction").innerText = "Transaction simulated: 10 cUSD sent!";
}

// ===== Tutoriels =====
const tutorials = [
  "Tutorial 1: How to create and manage a Celo Wallet",
  "Tutorial 2: Understanding Stablecoins on Celo",
  "Tutorial 3: Deploying Smart Contracts on Celo"
];

function showTutorials() {
  const container = document.getElementById("tutorials");
  container.innerHTML = ""; // reset

  tutorials.forEach((tut, index) => {
    const div = document.createElement("div");
    div.style.marginBottom = "10px";

    const btn = document.createElement("button");
    btn.innerText = `Tutorial ${index + 1}`;

    const content = document.createElement("p");
    content.innerText = tut;
    content.style.display = "none"; // caché par défaut
    content.style.marginLeft = "15px";

    // Toggle display fiable
    btn.addEventListener("click", () => {
      content.style.display = content.style.display === "none" ? "block" : "none";
    });

    div.appendChild(btn);
    div.appendChild(content);
    container.appendChild(div);
  });
}

// ===== Quiz =====
const quiz = [
  { question: "What is Celo?", answer: "A blockchain platform focused on mobile users" },
  { question: "What is cUSD?", answer: "Celo Dollar stablecoin" },
  { question: "How do you deploy a smart contract on Celo?", answer: "Using the Celo CLI or Remix IDE" }
];

function showQuiz() {
  const container = document.getElementById("quiz");
  container.innerHTML = ""; // reset

  quiz.forEach((q, index) => {
    const div = document.createElement("div");
    div.style.marginBottom = "10px";

    const question = document.createElement("p");
    question.innerText = `${index + 1}. ${q.question}`;
    question.style.fontWeight = "bold";

    const btn = document.createElement("button");
    btn.innerText = "Show Answer";

    const answer = document.createElement("p");
    answer.innerText = q.answer;
    answer.style.display = "none";
    answer.style.marginLeft = "15px";

    // Toggle display fiable
    btn.addEventListener("click", () => {
      answer.style.display = answer.style.display === "none" ? "block" : "none";
    });

    div.appendChild(question);
    div.appendChild(btn);
    div.appendChild(answer);
    container.appendChild(div);
  });
}
