document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    const withdrawTotalElement = document.getElementById("Withdraw-total");
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalElementString);
    balanceTotalElement.innerText = previousBalanceTotal - currentWithdrawTotal;

    withdrawField.value = "";
  });
