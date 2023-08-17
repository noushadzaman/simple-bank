document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    withdrawField.value = "";
    if (isNaN(newWithdrawAmount)) {
      alert("Please Provide a Valid Number");
      return;
    }

    const withdrawTotalElement = document.getElementById("Withdraw-total");
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    if (newWithdrawAmount > previousBalanceTotal) {
      alert("not enough balance");
      return;
    }
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
  });
