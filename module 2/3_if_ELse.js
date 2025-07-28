/* 14_3 If_else statement (visualization)

*****************if , else ********************
if (10 > 15){
    console.log(true);
} else{
    console.log(false);
}

*****************if , else ********************
const age = 12;
 if (age > 10 ){
    console.log("You can enter");
 } else{
    console.log("Sorry! You can not enter");
 } 
    
 **********if , else , else if*************
  var age = 15;
   if ( age >=18 ){
     console.log("You can try any Ride");
   }  else if ( age >= 13){
    console.log("You can try Specific Ride");
   } else {
    console.log("You can try only Child Ride");
   }
 
 ************Nested if, else*******************
 
 
 
 
 */

let age = 17;
let withAdult = true;

if (age >= 15) {
  //1st if condition
  console.log("You can go anywhere in festival area");
  if (withAdult) {
    //nested if condition
    console.log("You can enter in horror house");
  } else {
    console.log("You can't Enter in horror house");
  }
}

else{
    console.log("You can not enter in festival area");
}