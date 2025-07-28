// 13-5 Variable Animated Video
/* 
***************variable*************
you can use var and let keyword to declare variable. variable value can change after assigning the value.

like this way:

var money=20;
  money=15; 

  console.log(money);
  the result will be 15 
  which value of the variable is assigned later

  we can use 'let' keyword instead of 'var
  to declare variable. 

like this way:

let money=20;
  money=15; 
console.log(money);

***********constant**********
'const' value can not be assigned more than one time. it will show you error. 

const age= 15;
console.log(age);

you can't assign two time like:

const weight= 70;
weight=50;
console.log(weight); //now it will show you error because const value assigned two times


*/

var most=20;
  most=15; 
  console.log(most); //variable vALUE ASSIGNING  two time keyword "var"

let money=20;
  money=35; 
   console.log(money);  //variable vALUE ASSIGNING  two time keyword "let"

const age= 25;
  console.log(age);  //constant vALUE ASSIGNING using  keyword "const"

const weight= 70;
 weight=30;
   console.log(weight); 
   //constant vALUE ASSIGNING two time  using  keyword "const" and will show 'error' because const can't be assigned 2 times

