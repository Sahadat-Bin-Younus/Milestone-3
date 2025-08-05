//function task-2 : multiplication of 2 parameter in function
//


function getMultiplicationOutput(multiplication1, multiplication2){
  let Multiplication = multiplication1 * multiplication2;
   console.log("Multiplication of 10 * 30 is = " + Multiplication); // concatenation
    // console.log(`Multiplication of 10 * 30 is =  ${Multiplication}`) //template literals
      return Multiplication;
}
 const result = getMultiplicationOutput(50, 30);
  console.log(result);
