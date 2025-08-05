// 14_7 (optional) Nested if-else condition

const money = 20; //try this value 500, 200, 20 , -10

if (money > 300) {
    console.log("Bro you're rich");
}



else {
    if (money > 100) {
        console.log("Bro you're not poor nor rich");
    }
    else {

        if (money > 0) {
            console.log("bro, eat banana. you need calcium");
        }
        else {
            console.log("YOu're not my friend");
        }
    }
    //instead of else condition you can put these code in inside of if condition
}
