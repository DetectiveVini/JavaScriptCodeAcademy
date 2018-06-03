//                         Retorno II



let orderCount = 0;
//
const takeOrder = (topping, crustType) => {
  orderCount++;//A cada pedido ou chamada da função ele ira adicionar +1 ao orderCount
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};//Texto
takeOrder('mushroom', 'thin crust');//Chamada da Função
takeOrder('spinach', 'whole wheat');//Chamada da Função
takeOrder('pepperoni', 'brooklyn style');//Chamada da Função
//
const getTax = (itemCount) => {//Função de Imposto = 6%
        return getSubTotal(itemCount)*(0.06)// = 6%
}
const getTotal = (itemCount) =>{//Soma do SubTotal + o Imposto = Total Final
        return getSubTotal(itemCount) + getTax(itemCount)
}
const getSubTotal = (itemCount) => {
  return itemCount * 7.5;//itemCount será multiplicado por 7.5(RETORNO)
};
console.log(getSubTotal(orderCount));//Aqui o getSubTotal ira multiplicar a quantidade de itens em orderCount e multiplicar por 7.5