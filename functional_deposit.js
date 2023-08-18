document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const newDepositAmount = getInputFieldValueById("deposit-field");

    if (isNaN(newDepositAmount)) {
      alert("Please Provide a Valid Number");
      return;
    }
    const previousDepositTotal = getTextElementValueById("deposit-total");
    const depositTotal = totalValue(newDepositAmount, previousDepositTotal);
    setTextElementValueById("deposit-total", depositTotal);

    const previousBalanceTotal = getTextElementValueById("balance-total");
    const balanceTotal = totalValue(previousBalanceTotal, newDepositAmount);
    setTextElementValueById("balance-total", balanceTotal);
  });
