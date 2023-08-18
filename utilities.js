function getInputFieldValueById(InputFieldId) {
  const inputField = document.getElementById(InputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(ElementId) {
  const textElement = document.getElementById(ElementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function totalValue(previousValue, newValue) {
  const totalValue = previousValue + newValue;
  return totalValue;
}

function setTextElementValueById(ElementId, newValue) {
  const textElement = document.getElementById(ElementId);
  textElement.innerText = newValue;
}
