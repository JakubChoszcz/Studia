// ================================================
// ================ Laboratorium 3 ================ 
// ================================================










// Ćwicznie 3.1

// const cw3_1 = (str, col, row) => {
//     let newStr = '';
//     let newString = '';

//     for (let i = 0; i < col; i++) {
//         newStr += `${str} `;
//     }

//     for (let j = 0; j < row; j++) {
//         newString += `${newStr}\n`;
//     }

//     return newString;
// }

// cw3_1('n', 2, 4);










// Ćwicznie 3.2

// const to_base_n  = (to1, n) => {
//     let to2 = to1.toString(n);

//     return `${to1}_base_10 equals ${to2}_base_${n}`;
// }

// to_base_n(129, 8);










// Ćwicznie 3.3 - Fibonacci (iteration)

// const cw3_3 = (num) => {
//     let fibArray = [0, 1];

//     for (i = 0, j = 1, k = 0; k < num; i = j, j = x, k++ ) {
//         x = i + j;
//         fibArray.push(x);
//     }

//     return fibArray[num];
// }

// cw3_3(40);










// Ćwicznie 3.4 - Fibonacci (recursion)

// const cw3_4 = (num) => {
//     if (num <= 2) {
//         return 1;
//     } else {
//         return cw3_4(num - 1) + cw3_4(num - 2);
//     }
// }

// cw3_4(40);










// Ćwicznie 3.5 - Factorial (iteration)

// const cw3_5 = (num) => {
//     let factorial = 1;

//     for (let i = 1; i <= num; i++) {
//         factorial = factorial * i;
//     }

//     return factorial;
// }

// cw3_5(4);










// Ćwicznie 3.6 - Factorial (recursion)

// const cw3_6 = (num) => {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * cw3_6(num - 1);
//     }
// }

// cw3_6(4);










// Ćwicznie 3.7

// const cw3_7 = (r) => {
//     const field = Math.round(3.14 * (r ** 2));
//     const circuit = Math.round((2 * 3.14) * r);

//     return ` Field = ${field}j²\n Circuit = ${circuit}j`;
// }

// cw3_7(4);










// Ćwicznie 3.8

// const cw3_8 = (x1, y1, x2, y2) => {
//     const len = Math.round(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));

//     return `Length = ${len}j`;
// }

// cw3_8(-2, -2, 3, 3);










// Ćwicznie 3.9

// const cw3_9 = () => {

// }

// cw3_9();










// Ćwicznie 3.10

// const cw3_10 = (num) => {
//     let divisors = 0;

//     for (let i = 0; i < num; i++) {
//         if (num % i === 0) {
//             divisors += i;
//         }
//     }

//     if (divisors === num) {
//         return `${num} is a perfect number`
//     } else {
//         return `${num} is NOT a perfect number`
//     }
// }

// cw3_10(28);