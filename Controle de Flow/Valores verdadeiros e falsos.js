/*      Valores verdadeiros e falsos
Em JavaScript, todos os valores têm um truthy ou Falsas valor. Isso significa que eles são avaliados como true ou false quando são usados ​​como parte de uma condição de fluxo de controle.
Todas as variáveis ​​que foram declaradas e atribuídas são verdadeiras, a menos que contenham um dos seis valores listados abaixo:
*/
// False , 0 , -0 , '',"" , null , undefined , NaN
let wordCount = 1;
if (wordCount) {
  console.log("Great! You've started your work!");//Se for verdadeiro
} else {
  console.log('Better get to work!');//Se for falso
}


let favoritePhrase = '1';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");//True
} else {
  console.log('This string is definitely empty.');//False
}