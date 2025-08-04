
/*
Problem 03 - Medicine Planner 
মাসের ১ তারিখে রহিমা বেগম কে ডাক্তার কিছু ঔষধ দিয়েছেন  যেটা ঠিক ৩  দিন পর পর খেতে হবে। রহিমা বেগম কে যতদিন ঔষধ খেতে হবে সেটা lastDay নামে একটা ভ্যারিয়েবলে সেইভ করা আছে। 
রহিমা বেগম কোন কোন দিন ঔষধ খাবে এবং কোন কোন দিন ঔষধ খাবেনা  তার একটা লিস্ট তোমাকে প্রোগ্রামিং করে বানিয়ে দিতে হবে। এবং নিচের মতো করে আউটপুট দিতে হবে। 
Value of  lastDay ( 3 < number <=30 ) 
Output ( string ) 
4
1 - rest
2 - rest
3 - medicine
4 - rest
6
1 - rest
2 - rest
3 - medicine
4 - rest
5 - rest
6 - medicine


নিচের কোড স্নিপেট টি কপি করো ,  প্রোগ্রাম টি কে  কমপ্লিট করো  এবং console.log করে ঠিক যেভাবে আউটুপুট দেখাতে বলা হয়েছে সে আউটপুট দেখাও
//  Problem -03 ( Medicine Planner )
var lastDay = 11 ;
//write your code here



*/

/** Problem -03 ( Medicine Planner ) */
   var lastDay = 11;
      //write your code here
for(var i = 1; i <= lastDay; i++) {
 if (i % 3 === 0) {
     console.log(`${i} - medicine`);  }   //  console.log( i , "- medicine"); }
 else { console.log(`${i} - rest` ); }
}