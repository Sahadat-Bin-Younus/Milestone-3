/* 
মন্টূ  SSC পরীক্ষায় GPA 5 পেয়েছে ।  সে তার বাবার কাছে বায়না ধরেছে যে তাকে Cycle কিনে দিতে হবে কিংবা Laptop কিনে দিতে হবে।  মন্টুর বাবার  কাছে  যত টাকা আছে সেটা money নামে একটা ভ্যারিয়েবলে সেইভ করা আছে।  মন্টুর বাবা কিছু শর্তের ভিত্তি তে সিদ্ধান্ত নিবেন যে মন্টু কে কি কিনে দিবেন। 
মন্টুর বাবার টাকা 25000 কিংবা তার থেকে বেশি  থাকলে Laptop কিনে দিবেন। 
মন্টুর বাবার টাকা 10000 কিংবা তার থেকে বেশি  থাকলে Cycle কিনে দিবেন। 
এরথেকে কম থাকলে মন্টু কে স্বান্তনা পুরষ্কার হিসেবে Chocolate কিনে দিবেন। 
এখন মন্টুর বাবার জন্য একটা প্রোগ্রাম লিখে দাও এবং মন্টু কি পাবে সেটা আউটপুট হিসেবে দেখাও
Value of money ( 0 < number <=109 ) 
Output (string)

input: 45000
output: Laptop

input: 10000
output: Cycle

input: 9999
output: Chocolate 


নিচের কোড স্নিপেট টি কপি করো ,  প্রোগ্রাম টি কে  কমপ্লিট করো  এবং console.log করে আউটপুট দেখাও

//  Problem -02 ( Cycle or Laptop )
var money = 10000;
//write your code here

*/



/** Problem -02 ( Cycle or Laptop ) */
var money = 45000 ; //45000 , 9999 , 10000 , 60000
//write your code here

  if ( money >= 25000){
    console.log("Laptop");
  }
    else if( money >= 10000){
        console.log("Cycle");
    }
       else{
        console.log("Chocolate");
    }

/*    
 // using ternary
            console.log(
         money >= 25000 ? "Laptop" : 
      money >= 10000 ? "Cycle"
   : "Chocolate") 
   
*/

