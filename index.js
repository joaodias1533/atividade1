let numero1 = prompt("insire um número:");
if (isNaN(numero1)) {
  alert("Por favor, insire um número válido.");
} else {
  numero1 = Number(numero1);
  if (numero1 > 0) {
    alert("Número positivo.");
  } else {
    alert("O número não é positivo.");
  }
}
