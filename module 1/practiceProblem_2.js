
// 13-11 Module Summary and Practice Task

/* 

practice problem-2: 
Write a programme to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangla of a student.

input: 
first line of the input is the marks of the five subjects mentioned above. respectively.

output: 
Print the results in decimal places.

*/


   var Mathematics= 67.55842;
    var Biology= 93.88725401;
      var Chemistry= 94.8752410;
        var Physics= 50;
          var Bangla= 70;
   
 var totalSubjects =5;       
  var totalMarks= Mathematics+Biology+Chemistry+Physics+Bangla;
    var averageMarks= totalMarks/5;

console.log(totalSubjects);
  console.log(totalMarks);
    console.log( averageMarks.toFixed(2) );

// details output
console.log(`Total Subjects: ${totalSubjects} `);
   console.log(`Total Marks: ${totalMarks}`);
       console.log(`Average Marks: ${ averageMarks} `);


//advance way
var input = "85 90 78 88 92"; // example input as a string
var marks = input.split(" ");
var math = parseInt(marks[0]); //array index
var biology = parseInt(marks[1]);
var chemistry = parseInt(marks[2]);
var physics = parseInt(marks[3]);
var bangla = parseInt(marks[4]);

var total = math + biology + chemistry + physics + bangla;
var average = total / 5;

console.log("Average using var:", average);