/* function doubleIT(num) {
  const result = num * 2;
  return result;
} */

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  inputField.value = "";
  return amountValue;
}

function getTotalField(totalFieldId, depositAmount) {
  // debugger;
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const preciousTotal = parseFloat(totalText);
  totalElement.innerText = preciousTotal + depositAmount;
}

function updateBalance(amount, isAdd) {
  const totalBalance = document.getElementById("balance-total");
  const totalBalanceText = totalBalance.innerText;
  const totalBalanceAmount = parseFloat(totalBalanceText);
  if (isAdd == true) {
    totalBalance.innerText = amount + totalBalanceAmount;
  } else {
    totalBalance.innerText = totalBalanceAmount - amount;
  }
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    /* const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    const depositAmount = getInputValue("deposit-input");

    // get current deposit
    /* const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const preciousDepositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = preciousDepositTotalAmount + depositAmount; */
    getTotalField("deposit-total", depositAmount);
    //  update balance
    /* const totalBalance = document.getElementById("balance-total");
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = depositAmount + totalBalanceAmount; */
    updateBalance(depositAmount, true);
  });

// handle withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    /* const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */

    const withdrawAmount = getInputValue("withdraw-input");

    // update withdraw total
    /* const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */
    getTotalField("withdraw-total", withdrawAmount);

    // update total balance after withdraw

    /* const totalBalance = document.getElementById("balance-total");
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    totalBalance.innerText = totalBalanceAmount - withdrawAmount; */
    updateBalance(withdrawAmount, false);
  });
