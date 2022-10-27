let submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", checkPass);

function checkPass(e) {
  let pass = document.querySelector("#pass");
  let conf = document.querySelector("#pass-confirm");

  if (pass.value !== conf.value) {
    alert("Password fields do not match.");
    e.preventDefault();
    return false;
  }
}
