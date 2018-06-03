/*                      Declarando Funções 
Funções em JavaScript são geralmente declaradas como uma declaração de função ou uma expressão de função .
Uma declaração de função é uma função ligada a um identificador ou nome.

*/
//Exemplo do Code Academy 
/*function square (number) {
    return number * number; 
  }
  
  console.log(square(5));
  // Output: 25.
*/
function isGreaterThan (numberOne , numberTwo){//Dois parãnmetros
    if(numberOne > numberTwo){//Se numberOne for maior que number Two ele retorna True
        return true;
    }else{
    if(numberOne < numberTwo)//Se for menor que  numberTwo retorna False
        return false;
    }
}
isGreaterThan(1,2);//Numeros de sua escolha