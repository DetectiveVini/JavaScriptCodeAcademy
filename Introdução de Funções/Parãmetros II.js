/*                  Parãmetros 2


*/

const takeOrder = (topping , crustType) => {
    console.log('Order: pizza topped with ' + topping +' and '+crustType);
};
  
    takeOrder('mushrooms' , 'bacon');//Output:Order: pizza topped with mushrooms and bacon
        takeOrder('queijo', 'oregano')//Output:Order: pizza topped with queijo and oregano
            takeOrder('banana','chocolate')//Output:Order: pizza topped with queijo and oregano
                takeOrder('Frango', 'batata')//OutPut:Order: pizza topped with Frango and batata
