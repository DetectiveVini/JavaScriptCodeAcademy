/*                  Funções de Seta

*/
//Antes
/*const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
  };
  const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
  };
  console.log('The temperature is ' + getFahrenheit(15) + '°F');*/



  //Depois
  /*const multiplyByNineFifths = celsius => celsius * (9/5);

  const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;
  
  console.log('The temperature is ' + getFahrenheit(15) + '°F');
*/
const volumeOfSphere = diameter => //Vamos remover o parenteses
    (1/6) * Math.PI * diameter * diameter * diameter;//E vamos remover também as chaves

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');