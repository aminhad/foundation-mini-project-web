function getInputValue() {
  let balance = 0.0;
  let deposit = document.getElementById("deposite-ammount").value;
  balance += Number(deposit);
  document.getElementById("account-balance").innerHTML = balance + ".00";
}
