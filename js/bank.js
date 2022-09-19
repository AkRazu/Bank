/* function doubleIT(num) {
  const result = num * 2;
  return result;
} */

function getInputValue() {
  const depositInput = document.getElementById("deposit-input");
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);
  depositInput.value = "";
  return depositAmount;
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    /* const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    const depositAmount = getInputValue();

    // get current deposit
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const preciousDepositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = preciousDepositTotalAmount + depositAmount;

    //  update balance
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = preciousDepositTotalAmount + totalBalanceAmount;
  });

// handle withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // update withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update total balance after withdraw

    const totalBalance = document.getElementById("balance-total");
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    totalBalance.innerText = totalBalanceAmount - previousWithdrawTotal;
    console.log(totalBalance);

    // clear withdraw input field
    withdrawInput.value = "";
  });
