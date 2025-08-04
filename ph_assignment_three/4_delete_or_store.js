
/* 
Problem 04 - Delete / Store 
সুমনার পিসি তে অনেক অনেক ফাইল জমে গেছে। সুমনা pdf , docx ফাইল গুলো এবং যেসব ফাইলের নামের প্রথমে # আছে সেগুলো ছাড়া বাকী ফাইল  গুলো কে ডিলিট করে  দিতে চায়।  ফাইল এর  নাম fileName নামক ভ্যারিয়েবলে স্টোর করা আছে।   সুমনার জন্য একটা প্রোগ্রাম লিখে দাও  যেটা সুমনা কে নির্দেশনা দিবে ফাইল টি সে রাখবে না ডিলিট করবে। 
ফাইলের নামের প্রথমে # থাকলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store" 
ফাইল টা pdf হলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store" 
ফাইল টা docx হলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store"
এর বাইরে অন্য সব কিছুর জন্য output দেখাবে  "Delete"
Value of fileName ( string ) 
Output ( string ) 
result.pdf
Store
data.docx
Store
pdfData.jpg
Delete
#exp.mp4
Store
docx.txt
Delete
docx.xpdf
Delete
slipdf.txt
Delete

নিচের কোড স্নিপেট টি কপি করো ,  প্রোগ্রাম টি কে  কমপ্লিট করো  এবং console.log করে ঠিক যেভাবে আউটুপুট দেখাতে বলা হয়েছে সে আউটপুট দেখাও
// * Problem 04 - (Delete / Store)
var fileName= "pdfData.jpg";
//write your code here





*/

/* Problem 04 - (Delete / Store) */
var fileNames = [
  "movie list.txt",
  "electricity bill statistics.docx",
  "Avenger movie picture.jpg",
   "expense summary july 2025.pdf",
  "keyboard shortcut.txt",
  "dsbvisdcn .xpdf",
   "#three stooges.mp4",
];

for (var fileName of fileNames) {
  if (  fileName.endsWith('.pdf') || fileName.endsWith('.docx') || fileName.startsWith('#')  )   
  { console.log( "Store");  } 

 else { console.log( "Delete"); }
 }



/* Problem 04 - (Delete / Store) */
//    var fileName= "pdfData.jpg";
//      //write your code here
// if (fileName.endsWith('.pdf') || fileName.endsWith('.docx') || fileName.startsWith('#')) {
//   console.log('Store'); }
// else { console.log('Delete');  }
