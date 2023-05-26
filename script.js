function calcularPropina() {
  var total = parseFloat(document.getElementById("total").value);
  var percentage = parseFloat(document.getElementById("percentage").value);
  
  if (isNaN(total) || isNaN(percentage)) {
    alert("Por favor, introduce valores numéricos válidos.");
    return;
  }
  
  var tip = total * (percentage / 100);
  var totalAmount = total + tip;
  
  document.getElementById("totalAmount").textContent = "$" + totalAmount.toFixed(2);
}
