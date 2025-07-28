// 3 Maths Needed to start learning Programming Language

/* 
*****************************************
math needed for programming:
******************************************
1. number: +ve, -ve, 0 [50, -3, 0]
2. integer: 2,545 [odd, even]: 7, 12
3. float: 2.3, 3.6
4. operation: [addition,subtraction,multiplication, division ]:  +, -, *, /
5. more operation: [reminder] %,
6. percentage: 5%
7. sum: 13,13,14
8. Average: 1274, 12344, 13423
9. max/min: 13,13,14, 1274, 12344, 13423
10.series: series of 1-50 and needed odd, even etc
12. area: triangle, square etc
13.prime number, permutaion, straight line, non straight line, graph [x axis, y axis , z axis]


*/

/*
 Generate examples of each type:

// 1. Numbers: positive, negative, zero
const positiveNumber = 50;
const negativeNumber = -3;
const zeroNumber = 0;

// 2. Integers: odd and even
const oddInteger = 7;
const evenInteger = 12;

// 3. Floats (decimal numbers)
const floatNumber1 = 2.3;
const floatNumber2 = 3.6;

console.log('Positive Number:', positiveNumber);
console.log('Negative Number:', negativeNumber);
console.log('Zero:', zeroNumber);
console.log('Odd Integer:', oddInteger);
console.log('Even Integer:', evenInteger);
console.log('Float Number 1:', floatNumber1);
console.log('Float Number 2:', floatNumber2);    

*/


const a = 10;
const b = 3;
console.log('Addition:', a + b);
console.log('Subtraction:', a - b);
console.log('Multiplication:', a * b);
console.log('Division:', a / b);

/* 5. More operation: remainder (%) */
console.log('Remainder:', a % b);

/* 6. Percentage: 5% of 200 */
const percent = 5;
const total = 200;
console.log('5% of 200:', (percent / 100) * total);

/* 7. Sum: 13, 13, 14 */
const sum = 13 + 13 + 14;
console.log('Sum:', sum);

/* 8. Average: 1274, 12344, 13423 */
const nums = [1274, 12344, 13423];
const average = nums.reduce((acc, val) => acc + val, 0) / nums.length;
console.log('Average:', average);

/* 9. Max/Min: 13, 13, 14, 1274, 12344, 13423 */
const allNums = [13, 13, 14, 1274, 12344, 13423];
console.log('Max:', Math.max(...allNums));
console.log('Min:', Math.min(...allNums));

/* 10. Series: 1-50, odd, even */
const series = Array.from({ length: 50 }, (_, i) => i + 1);
const oddSeries = series.filter(n => n % 2 !== 0);
const evenSeries = series.filter(n => n % 2 === 0);
console.log('Series 1-50:', series);
console.log('Odd Series:', oddSeries);
console.log('Even Series:', evenSeries);

/* 12. Area: triangle, square */
const base = 5, height = 10;
const triangleArea = 0.5 * base * height;
console.log('Area of triangle:', triangleArea);

const side = 4;
const squareArea = side * side;
console.log('Area of square:', squareArea);

/* 13. Prime number, permutation, straight line, graph axes */
// Prime number check
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log('Is 7 prime?', isPrime(7));

// Permutation: number of ways to arrange 3 items
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log('Permutations of 3 items:', factorial(3));

// Straight line: y = mx + c
const m = 2, x = 3, c = 1;
const y = m * x + c;
console.log('y = mx + c, when x=3:', y);

// Graph axes
console.log('Graph axes: x, y, z');

