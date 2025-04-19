import "../style.css";

const totalAmount = document.getElementById("totalAmount") as HTMLElement;
const addIncomeBtn = document.getElementById("addIncomeBtn");

let income = Number(localStorage.getItem("income")) || 0;

totalAmount.textContent = `$${income}`;

addIncomeBtn?.addEventListener("click", () => {
  const newIncomeStr = prompt("Enter your monthly income:");
  const newIncome = Number(newIncomeStr);

  if (!isNaN(newIncome)) {
    income = newIncome;
    localStorage.setItem("income", income.toString());
    totalAmount.textContent = `$${income}`;
  } else {
    alert("Please enter a valid number.");
  }
});
