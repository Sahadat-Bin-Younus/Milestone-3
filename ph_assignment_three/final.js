
/** Problem -01 ( Divide the Asset ) */
var area = 800;
 //write your code here
   var rahim_karim_each_get_land_area = area / 2;
     console.log(rahim_karim_each_get_land_area);



/** Problem -02 ( Cycle or Laptop ) */
   var money = 10000;
     //write your code here
if (money >= 25000) {
   console.log('Laptop'); }
else if (money >= 10000) {
    console.log('Cycle'); }
else { console.log('Chocolate');  }



/** Problem -03 ( Medicine Planner ) */
   var lastDay = 11;
      //write your code here
for(var i = 1; i <= lastDay; i++) {
 if (i % 3 === 0) {
     console.log(i, '- medicine');  }
 else { console.log(i, '- rest');  }
}


/** Problem 04 - (Delete / Store) */
var fileNames = [
  "pdfData.jpg ",
  "movie list.txt",
  "electricity bill statistics.docx",
  "Avenger movie picture.jpg",
  "expense summary july 2025.pdf",
  "keyboard shortcut.txt",
  "dsbvisdcn.xpdf",
   "#three stooges.mp4",
];

for (var fileName of fileNames) {
  if (  fileName.endsWith('.pdf') || fileName.endsWith('.docx') || fileName.startsWith('#')  )   
  { console.log( "Store");  } 

 else { console.log( "Delete"); }
 }


/** Problem 05 - ( PH Email Generator )  */
   var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
      //write your code here
  var name = student.name.toLowerCase();
    var roll = student.roll;
      var department = student.department.toLowerCase();     
console.log(`${name}${roll}.${department}@ph.ac.bd`);
// console.log( name + roll + "."+ department + "@ph.ac.bd");


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var bortomanSalary = startingSalary;
  for (var i = 1; i <= experience; i++) {
     bortomanSalary += bortomanSalary * 0.05;
  }
console.log(bortomanSalary.toFixed(2));








