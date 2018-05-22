/*              Valores verdadeiros e falsos II
JavaScript fornece um operador para trocar a verdade e falsidade de valores - o ponto de exclamação ( !). 
Podemos usar isso em instruções condicionais como forma abreviada para verificar se o valor de uma variável é avaliado como falso em vez de verdadeiro.


*/

let favoritePhrase = '1';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}