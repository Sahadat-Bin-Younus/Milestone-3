// 14_6 Multi level If-else if-else condition
// Homework: BMI calculate , Grading using thess way code


const age = 62;
const price = 500;

if (age <= 12) {
    console.log("You can eat Free");
}

// 1st else if
else if (age >= 60) {
    //50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
      console.log(payAmount);
}

// 2nd else if
else if (age >= 50) {
    //25% discount
    const discount = price * 25 / 100;
    const payAmount = price - discount;
       console.log(payAmount);
}

else {
    console.log(price);
}







