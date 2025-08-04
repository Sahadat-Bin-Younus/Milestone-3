/* 

Problem 05 - PH Email Generator
{ name: string , roll: number ,department: string  }


উপরের অব্জেক্ট এর Structure টি লক্ষ্য করো।  ph university তে  পড়া student এর Data   student  নামের একটা ভ্যারিয়েবলে সেইভ করা আছে  ।  তোমাকে এমন একটা প্রোগ্রাম লিখতে হবে যেটা   student  অব্জেক্ট এর ডাটা এর উপর ভিত্তি করে  একটা ইমেইল  জেনারেট করে দেবে। ইমেইল টা হবে ঠিক নিচের স্ট্রাকচারে 
name
roll
.
department 
@ph.ac.bd




নিচের আউটপুট গুলো লক্ষ্য করো। 
Value of  Student ( object ) 
Output (string)
{ name: "jhankar" , roll: 1014 ,department: "cse"  }
jhankar1014.cse@ph.ac.bd
{ name: "monu" , roll: 99,department: "eee"  }
monu99.eee@ph.ac.bd
{ name: "mewo" , roll: 96 ,department: "cse"  }
mewo96.cse@ph.ac.bd


নিচের কোড স্নিপেট টি কপি করো ,  প্রোগ্রাম টি কে  কমপ্লিট করো  এবং console.log করে ঠিক যেভাবে আউটুপুট দেখাতে বলা হয়েছে সে আউটপুট দেখাও
// * Problem 05 - ( PH Email Generator ) 
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

*/

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

/* Problem 05 - ( PH Email Generator )  */
   var student= { name: "Sahadat", roll: 1726, department: "economics" };
      //write your code here
  var name = student.name.toLowerCase();
    var roll = student.roll;
      var department = student.department.toLowerCase(); 
      console.log( name + roll + "."+ department + "@ph.ac.bd")    
// console.log(`${name}${roll}.${department}@ph.ac.bd`);
