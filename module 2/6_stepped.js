// 14_6 Multi level If-else if-else condition

/* 
 Multi Level Condition:


*/

const price = 2000;

if (price >= 5000 ){
  // 10 percent discount

    const discount = price * 10 /100;
     const payAmount = price - discount;

console.log(discount); 
    console.log(payAmount);

}

else if(price > 2500 ){
   //5 percent discount
       const discount = price * 5 /100;
          const payAmount = price - discount;

  console.log(payAmount);
}



 else{
    console.log(price);
 }







