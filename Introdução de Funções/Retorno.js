/*                              Retorno
Usar return geralmente é uma prática recomendada ao escrever funções,
pois torna seu código mais fácil de manter e flexível.
*/

let orderCount = 0;
//
const takeOrder = (topping, crustType) => {
  orderCount++;//A cada pedido ou chamada da função ele ira adicionar +1 ao orderCount
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};//Texto
takeOrder('mushroom', 'thin crust');//Chamada da Função
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');
//
const getSubTotal = (itemCount) => {
  return itemCount * 7.5;//itemCount será multiplicado por 7.5(RETORNO)
};
console.log(getSubTotal(orderCount));//Aqui o getSubTotal ira multiplicar a quantidade de itens em orderCount e multiplicar por 7.5