document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositField = document.getElementById("deposit-field");
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);

    depositField.value = "";
    if (isNaN(newDepositAmount)) {
      alert("Please Provide a Valid Number");
      return;
    }

    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalElementString);
    balanceTotalElement.innerText = previousBalanceTotal + currentDepositTotal;

    depositField.value = "";
  });
