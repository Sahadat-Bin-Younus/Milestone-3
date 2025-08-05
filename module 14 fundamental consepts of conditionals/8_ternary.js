// 14_8 (advanced )If-else shorthand Ternary Operator
/* ternary--> three parts
  ? :
condition ? do something when true:
do something when false

*/

 
 
/*  

//normal if-else
  const age = 112;
  if (age >= 18){
    console.log("You can vote")
  }
  else {
    console.log("Ghumaye thako")
  }

// simpleternary operator
age >= 18 ? console.log("vote Dio") : console.log("Ghumaye thako");

 

 */

/* let price = 12000;
 const isLeader = false;

 if (isLeader === true) {
  price = 0;
 }
  else {
    price = price + 100;
  }
  console.log(price);


  2nd simple ternary operator
  price = isLeader === true ? 0 : price + 100;
  console.log(price);
 */

  // 3rd ternary(optional): semi advanced
  let price = 1000;
    const isLeader = false;

 if(isLeader === true){
  if (price > 1000) {
    price = price / 2;
      console.log(price);
  }
  else{
    price = 0;
    console.log(price);
  }

 }
 else{
  price = price + 100;
  console.log(price);
 }


// feel free to ignore below code
 price = isLeader === true ? 
    price > 1000 ? 
        price / 2 : 0 : 
            price + 100;
 console.log(price);


//2nd way to write the same code
price = (isLeader === true) ?
   (price > 1000 ? price / 2 : 0)
      : (price + 100);

      console.log(price);