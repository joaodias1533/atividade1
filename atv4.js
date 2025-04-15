const valorCompra = prompt("4) Digite o valor da compra:");
if (isNaN(valorCompra)) {
  alert("Por favor, digite um valor de compra válido.");
} else if (Number(valorCompra) >= 100) {
  const desconto = Number(valorCompra) * 0.10;
  const valorFinal = Number(valorCompra) - desconto;
  alert(`Você ganhou um desconto de 10%!\nValor do desconto: R$ ${desconto.toFixed(2)}\nValor final: R$ ${valorFinal.toFixed(2)}`);
} else {
  alert("Compra abaixo de R$100. Sem desconto.");
}
