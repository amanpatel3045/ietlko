// Store the wallet amount to your local storage with key "amount"
var amount = localStorage.getItem("amount") || 0;
document.getElementById("wallet").innerText = amount;

function addToWallet() {
  var money = +document.getElementById("amount").value;
  amount = Number(money) + Number(amount);
  localStorage.setItem("amount", amount);
  document.getElementById("wallet").innerText = amount;
}
