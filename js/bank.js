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

function getCurrentBalance(){
  const totalBalance = document.getElementById("balance-total");
  const totalBalanceText = totalBalance.innerText;
  const totalBalanceAmount = parseFloat(totalBalanceText);
  return totalBalanceAmount;
}

function updateBalance(amount, isAdd) {
  /* const totalBalance = document.getElementById("balance-total");
  const totalBalanceText = totalBalance.innerText;
  const totalBalanceAmount = parseFloat(totalBalanceText); */
  const totalBalance = document.getElementById("balance-total");
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    totalBalance.innerText = amount + previousBalanceTotal;
  } else {
    totalBalance.innerText = previousBalanceTotal - amount;
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

    //  update balance
    /* const totalBalance = document.getElementById("balance-total");
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = depositAmount + totalBalanceAmount; */
    if (depositAmount > 0) {
      getTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
    }
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

    // update total balance after withdraw

    /* const totalBalance = document.getElementById("balance-total");
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    totalBalance.innerText = totalBalanceAmount - withdrawAmount; */
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
      getTotalField("withdraw-total", withdrawAmount);
      updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
      alert('You can not withdraw more than what you have in your account')
    }
  });
