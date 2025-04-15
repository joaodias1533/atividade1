const numero2 = prompt("3) Digite um número:");
if (isNaN(numero2)) {
  alert("Por favor, digite um número válido.");
} else if (Number(numero2) % 2 === 0) {
  alert("O número é par.");
} else {
  alert("O número é ímpar.");
}
