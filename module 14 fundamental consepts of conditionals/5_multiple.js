
// 14_5 Multiple condition Logical Operators(&&, ||)

const salary = 21000;
 const isBCS = true;
   const height = 68;
     const hasCar = false;

/* ***************************************** */
//  simple if , else condition
if (salary > 20000){
   console.log("Supatro") ;
}

else{
    console.log("Onno Patro khuji");

}


/* ******************************************** */
// if , else condition with logical operator
if (salary > 20000 && height > 66 ){
   console.log("Supatro") ;
}

else{
    console.log("Onno Patro khuji");
} 


/* ******************************************* */ 
// if , else with logical OR operator and boolean
 if (salary > 25000 || height > 72 || isBCS ==true ){
    console.log("Eso baba kobul");
 }
 
else{
    console.log("Vag Tui Mokbul");

}


/* ******************************************* */
// if , else with logical AND operator and boolean
 if (salary > 25000 && height > 72 && isBCS ==true ){
    console.log("Eso baba kobul");
 }
 
else{
    console.log("Vag Tui Mokbul");

}


/* ******************************************** */
// if , else with logical AND operator and boolean
 if (salary > 25000 && height > 72 && isBCS ==true ){
    console.log("Eso baba kobul");
 }
 
else{
    console.log("Vag Tui Mokbul");

}


/* ******************************************** */
// complex condition

if ( (salary > 25000 && hasCar ==true) || isBCS ==true)  {
console.log("Meyer 14 ghusti Raji");
}
else{
    console.log("Vag Tui Mokbul");

}

/* ******************************************** */
// complex condition - 2
if ( (salary > 25000 || hasCar ==true) && isBCS ==true)  {
console.log("Meyer 14 ghusti Raji");
}
else{
    console.log("Vag Tui Mokbul");

}





