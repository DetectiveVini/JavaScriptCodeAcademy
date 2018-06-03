/*                          Expressões de Função

Você pode identificar uma expressão de função
pela ausência de um nome de função imediatamente 
atrás da palavra-chave da função.
*/
//Antes
/*
function isGreaterThan(numberOne, numberTwo){
    if(numberOne > numberTwo){
      return true;
    } else {
      return false;
    }
  }
  isGreaterThan(4, 8)
*/
//Depois
const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo){
    return true;
  }else{
    return false;
  }
}

isGreaterThan(1 ,2)