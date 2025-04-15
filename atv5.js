const numero3 = prompt("5) Digite um número:");
if (isNaN(numero3)) {
  alert("Por favor, digite um número válido.");
} else if (Number(numero3) % 5 === 0) {
  alert("O número é múltiplo de 5.");
} else {
  alert("O número NÃO é múltiplo de 5.");
}