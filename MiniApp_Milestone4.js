/***** Wallet & Transaction *****/
function showWallet() {
  document.getElementById("wallet").innerText = "Test Wallet: 0x1234...ABCD";
}

function simulateTransaction() {
  document.getElementById("transaction").innerText = "Transaction simulated: 10 cUSD sent!";
}

/***** Tutoriels *****/
const tutorials = [
  {
    title: "Tutorial 1: Celo Wallets",
    summary: "Step-by-step instructions, recovery phrase best practices.",
    fullContent: `1. Install Celo Wallet.
Download and install the official Celo Wallet app.

2. Create Account.
Follow setup instructions to create a new account.

3. Backup Recovery Phrase.
Write down your recovery phrase safely. Never share it.

4. Send Test Transaction.
Send a small amount of cUSD to another wallet to ensure it works.`
  },
  {
    title: "Tutorial 2: Stablecoins",
    summary: "Understanding cUSD and cEUR safely.",
    fullContent: `1. What is cUSD and cEUR?
cUSD (Celo Dollar) and cEUR (Celo Euro) are stablecoins pegged to USD and EUR on Celo.

2. How to use them safely?
Always double-check addresses, never share private keys, use testnet first.

3. Example Transactions
Send a small amount of cUSD/cEUR to another wallet and confirm the transaction.

4. Tips & Best Practices
Keep backups, monitor balances, start with small amounts.`
  },
  {
    title: "Tutorial 3: Smart Contracts",
    summary: "Overview of Remix, Truffle, Celo CLI.",
    fullContent: `1. Open Remix IDE.
Go to https://remix.ethereum.org/ and create a Solidity file.

2. Write Smart Contract.
Write a simple storage contract in Solidity.

3. Compile & Deploy
Compile and deploy to Alfajores testnet using Remix or Celo CLI.

4. Verify Contract Execution
Test functions to confirm deployment success.`
  }
];

let tutorialsVisible = false;

function showTutorials() {
  const container = document.getElementById("tutorials");
  if (tutorialsVisible) {
    container.innerHTML = "";
    tutorialsVisible = false;
    return;
  }

  container.innerHTML = "";
  tutorials.forEach(t => {
    const item = document.createElement("div");
    item.style.marginBottom = "15px";
    item.style.border = "2px solid #FFD700";
    item.style.borderRadius = "10px";
    item.style.padding = "12px";
    item.style.backgroundColor = "#111";
    item.style.color = "#FFD700";

    const titleEl = document.createElement("h3");
    titleEl.innerText = t.title;
    titleEl.style.marginTop = "0";

    const summary = document.createElement("p");
    summary.innerText = t.summary;
    summary.style.fontStyle = "italic";
    summary.style.marginBottom = "8px";

    const btn = document.createElement("button");
    btn.innerText = "Show Tutorial";
    btn.style.display = "block";
    btn.style.margin = "0 auto 8px auto";
    btn.style.width = "160px";

    const full = document.createElement("pre");
    full.innerText = t.fullContent;
    full.style.display = "none";
    full.style.backgroundColor = "#222";
    full.style.padding = "10px";
    full.style.borderRadius = "6px";
    full.style.whiteSpace = "pre-wrap";

    btn.onclick = () => {
      full.style.display = (full.style.display === "block") ? "none" : "block";
    };

    item.appendChild(titleEl);
    item.appendChild(summary);
    item.appendChild(btn);
    item.appendChild(full);
    container.appendChild(item);
  });

  tutorialsVisible = true;
}

/***** Quiz *****/
const quiz = [
  { q: "What is Celo?", a: "A blockchain platform focused on mobile users." },
  { q: "What is cUSD?", a: "Celo Dollar stablecoin." },
  { q: "How do you deploy a smart contract on Celo?", a: "Using Celo CLI or Remix IDE." }
];

let quizVisible = false;

function showQuiz() {
  const container = document.getElementById("quiz");
  if (quizVisible) {
    container.innerHTML = "";
    quizVisible = false;
    return;
  }

  container.innerHTML = "";
  quiz.forEach(qItem => {
    const item = document.createElement("div");
    item.style.marginBottom = "10px";
    item.style.border = "2px solid #FFD700";
    item.style.borderRadius = "8px";
    item.style.padding = "10px";
    item.style.backgroundColor = "#111";
    item.style.color = "#FFD700";

    const qEl = document.createElement("p");
    qEl.innerText = qItem.q;
    qEl.style.fontWeight = "bold";
    qEl.style.marginTop = "0";

    const btn = document.createElement("button");
    btn.innerText = "Show Answer";
    btn.style.display = "block";
    btn.style.margin = "5px auto";

    const ans = document.createElement("p");
    ans.innerText = qItem.a;
    ans.style.display = "none";
    ans.style.paddingLeft = "10px";

    btn.onclick = () => {
      ans.style.display = (ans.style.display === "block") ? "none" : "block";
    };

    item.appendChild(qEl);
    item.appendChild(btn);
    item.appendChild(ans);
    container.appendChild(item);
  });

  quizVisible = true;
}

