/*                          Operador Ternário
isNightTime ?- a declaração condicional seguida de um ponto de interrogação. 
Isso verifica se isNightTime é verdade.
console.log ('Turn on the lights!') - este código será executado se a condição for verdadeira.
: - um dois pontos separa os dois blocos diferentes de código que podem ser executados.
console.log('Turn off the lights!'); - este código será executado se a condição for falsamente
*/

/*          Exemplo de Operador Ternário 
    isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
*/
//Primeiro
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') :   console.log('You will not need a key to open the door.');
//Segundo
let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');
// Terceiro
let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
