document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");

    if (isNaN(newWithdrawAmount)) {
      alert("Please Provide a Valid Number");
      return;
    }
    const previousWithdrawTotal = getTextElementValueById("Withdraw-total");
    const newWithdrawTotal = totalValue(
      newWithdrawAmount,
      previousWithdrawTotal
    );
    setTextElementValueById("Withdraw-total", newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById("balance-total");
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
  });
