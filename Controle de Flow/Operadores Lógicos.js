/*                  Operadores Lógicos
    Em inglês, às vezes dizemos "ambas as coisas" ou "qualquer uma dessas coisas". 
Vamos traduzir essas frases em JavaScript com operadores especiais chamados operadores lógicos .
Para dizer "ambos devem ser verdade", nós usamos &&.
Para dizer "ou pode ser verdade", nós usamos ||.
*/
let isFoggyNight = false;
let moonPhase = 'full';

if (moonPhase === 'full' || isFoggyNight === true) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}