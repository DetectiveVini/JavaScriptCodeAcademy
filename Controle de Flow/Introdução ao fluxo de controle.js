/*          Introdução ao fluxo de controle
        Nesta lição, aprenderemos a tomar decisões com JavaScript e como ela pode controlar o fluxo do programa.
*/
let userName = 'Vinicius';
const knowJavaScript =false;
if(knowJavaScript && userName){
    console.log(`Otimo ${userName} , você pode praticar seu JavaScript`)
} else if (userName){
    console.log(`${userName} você pode aprender JS`)
}   