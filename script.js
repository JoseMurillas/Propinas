window.onload = function() {//Funcion nos ayuda ocultar el inicio
  mostrarSaludo();
};
function mostrarSaludo() {
  document.getElementById('principal').style.display = 'block';
  document.getElementById('calculadora_tip').style.display = 'none';
  var indicator = document.getElementById('indicator'); //Agregamos color cuando el usuario presione inicio
}

function mostrarCalculadora() {
  document.getElementById('principal').style.display = 'none';
  document.getElementById('calculadora_tip').style.display = 'block';
  var indicator = document.getElementById('indicator');//Agregamos color cuando el usuario presione calculadora de propinas
}

function calcularPropina() { //Creamos las funciones de la calculadora de propinas
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
