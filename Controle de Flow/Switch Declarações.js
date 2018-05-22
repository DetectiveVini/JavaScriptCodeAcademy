/*                          Switch Declarações/ Mudar Declarações
    Para um computador, uma switch declaração e um if/ else declaração são os mesmos
mas a switchdeclaração pode ser mais fácil para os outros seres humanos para ler.
*/
/*          Exemplo de como se usar o switch
let groceryItem = 'papaya';
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
*/
//break, switch  e default

let moonPhase = 'full';

switch(moonPhase) {
    case 'full':
        console.log('Howl!');//Se moonPhase for full
        break;
    case 'mostly full':
        console.log('Arms and legs are getting hairier');//Se for mostly full   
        break;
    case 'mostly new':
        console.log('Back on two feet');//mostly new
        break;
    default:
        console.log('Invalid moon phase');//
        break;
}