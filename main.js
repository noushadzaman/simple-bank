document.getElementById("submit-button").addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  if (email == "1234@gmail.com" && pass == 1234) {
    window.location.href = "./bank.html";
  } else {
    alert("Invalid User");
  }
});

