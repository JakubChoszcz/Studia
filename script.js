// ================================================
// ================ Laboratorium 1 ================ 
// ================================================





// Ćwiczenie 1.1

// const cw1_1 = () => {
//     const a = window.prompt('Enter an integer number: ');
//     const b = window.prompt('Enter a real number: ');
//     const c = window.prompt('Enter a character: ');
    
//     return `${a}, ${b}, ${c}`;
// }

// cw1_1();





// Ćwiczenie 1.2

// const cw1_2 = () => {
//     let a = window.prompt('Enter 1. integer number: ');
//     a = parseInt(a);
//     let b = window.prompt('Enter 2. integer number: ');
//     b = parseInt(b);
//     let c = window.prompt('Enter 3. integer number: ');
//     c = parseInt(c);

//     const aritAver = (a + b + c) / 3;

//     return `Arithmetic average = ${aritAver}`;
// }

// cw1_2();





// Ćwiczenie 1.3

// const cw1_3 = () => {
//     let a = window.prompt('Enter 1. integer number: ');
//     a = parseInt(a);
//     let b = window.prompt('Enter 1. integer number: ');
//     b = parseInt(b);
    

//     const addition = a + b;
//     const multiplication = a * b;
//     const division = a / b;
//     const exponentiation = a**b;
//     const squareRoot = Math.sqrt(a);

//     return `Addition = ${addition}; Multiplication = ${multiplication}; Division = ${division}; Exponentiation = ${exponentiation}; Square Root = ${squareRoot}`;
// }

// cw1_3();





// Ćwiczenie 1.4

// const cw1_4 = () => {
//     let a = window.prompt('Podaj swoje imię: ');
//     let b = window.prompt('Podaj rok urodzenia: ');

//     let year = new Date().getFullYear();
//     const age = year - b;

//     return `${a}, masz ${age} lat.`;
// }

// cw1_4();





// Ćwiczenie 1.5

// const cw1_5 = (x, y, z) => {
//     const p = Math.sqrt(x**2 + y**2 + z**2);
//     const tan = y/x;


//     console.log(`${p}, ${tan}`);
// }

// cw1_5(-2, -1, 5);





// ================================================
// ================ Laboratorium 2 ================ 
// ================================================





// Ćwicznie 2.1

// const cw2_1 = (y) => {
//     const yToDays = y*365;

//     return `Years: ${y}; Days: ${yToDays}`;
// }

// console.log(cw2_1(20));





// Ćwiczenie 2.2

// const cw2_2 = () => {
//     return 1.18 * 10^-38 * 1.18 * 10^-38;
// }

// cw2_2();





// Ćwiczenie 2.3

// const cw2_3 = () => {
//     let a = window.prompt('Podaj liczbę dni: ');
//     let pDays = a;
//     let weeks = 0;
//     let days = 0;

//     while (pDays > 0) {
//         if (pDays >= 7) {
//             weeks ++;
//             pDays -= 7;
//         } else {
//             days ++;
//             pDays -= 1;
//         }
//     }

//     return `${a} dni to ${weeks} tygodnie, ${days} dni.`;
// }

// cw2_3();





// Ćwiczenie 2.4 

// const cw2_4 = () => {
//     let fahrenheit = window.prompt('Podaj temperaturę w Fahrenheitach: ');
//     const celsius = Math.round((fahrenheit-32)*5/9 * 100) / 100;
//     const kelwin = celsius + 273;

//     return `Fahrenheit: ${fahrenheit}; Celsjusz: ${celsius}; Kelwin: ${kelwin}`;
// }

// console.log(cw2_4());





// Ćwiczenie 2.5

// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// const cw2_5 = () => {
//     let letter = window.prompt('Wprowadz literę: ');
//     letter = letter.toUpperCase();

//     let letters = '';

//     for (let i = alphabet.indexOf(letter); i >= 0; i--) {
//         letters += alphabet[i];
//     }

//     return letters;
// }

// cw2_5();





// Ćwiczenie 2.6

// const cw2_6 = () => {
//     let word = window.prompt('Wpisz słowo: ');
//     word = word.split('');

//     let backWord = [];

//     for (let letter of word) {
//         backWord.unshift(letter);
//     }

//     backWord = backWord.join('');

//     return backWord;
// }

// cw2_6();





// Ćwiczenie 2.7

// const cw2_7 = () => {
//     let a = window.prompt('Enter lower integer limit: ');
//     a = parseInt(a);
//     let b = window.prompt('Enter upper integer limit: ');
//     b = parseInt(b);

//     let sum = 0;

//     if (a < b) {
//         for (let i = 0; i <= (b - a); i++) {
//             sum += (a+i) ** 2;
//         }
//         console.log(`The sums of the squares from ${a*a} to ${b*b} is ${sum}`);
//         cw2_7();
//     } else {
//         console.log('Done');
//     }
// }

// cw2_7();





// Ćwiczenie 2.8 

// const cw2_8 = () => {
//     let Ewa = 1000;
//     let EwaInvests = 0;
    
//     let Anna = 1000;
//     let AnnaInvests = 0;

//     let years = 0;

//     while (EwaInvests >= AnnaInvests) {
//         Ewa += 100;
//         EwaInvests = Ewa - 1000;

//         Anna = Math.round(Anna*1.05);
//         AnnaInvests = Anna - 1000;

//         years++;
//     }

//     return `
//         Years: ${years}; 
//         Ewa's Investments: ${EwaInvests}; 
//         Anna's Investments: ${AnnaInvests};
//     `;
// }

// cw2_8();





// Ćwiczenie 2.9

// const cw2_9 = () => {
//     let h = window.prompt('Wpisz liczbę godzin: ');

//     let salary = 40;

//     let brutto = 0;
//     let netto = 0;
//     let gross = 0;

//     for (let i = h; i > 0; i--) {
//         if (h > 40) {
//             brutto += salary*1.5;
//         } else {
//             brutto += salary
//         }
//         h--;
//     }

//     let help = brutto;

//     while (help > 0) {
//         if (help > 1800) {
//             gross += (help - 1800)*.25;
//             help = 1800;
//         } else if (help > 1200) {
//             gross += (help - 1200)*.2;
//             help = 1200;
//         } else {
//             gross += help*.15;
//             help = 0;
//         }
//     }

//     netto = brutto - gross;

//     return `
//         Brutto: ${brutto} PLN;
//         Netto: ${netto} PLN;
//         Gross: ${gross} PLN;
//     `;
// }

// cw2_9();





// Ćwiczenie 2.10

// const cw2_10 = () => {
//     console.log('1) 30 PLN/h 2) 40 PLN/h 3) 50 PLN/h 4) 60 PLN/h 5) wyjdź');

//     let ans = window.prompt('Wprowadź liczbę odpowiadającą żądanej stawce wynagrodzenia: ')
    
//     let salary = '';

//     switch (ans) {
//         case '1': 
//             salary = 30;
//             break;

//         case '2': 
//             salary = 40;
//             break;

//         case '3': 
//             salary = 50;
//             break;

//         case '4': 
//             salary = 60;
//             break;
//     }

//     if (salary === '') return null;
    
//     let h = window.prompt('Wpisz liczbę godzin: ');

//     let brutto = 0;
//     let netto = 0;
//     let gross = 0;

//     for (let i = h; i > 0; i--) {
//         if (h > 40) {
//             brutto += salary*1.5;
//         } else {
//             brutto += salary
//         }
//         h--;
//     }

//     let help = brutto;

//     while (help > 0) {
//         if (help > 1800) {
//             gross += (help - 1800)*.25;
//             help = 1800;
//         } else if (help > 1200) {
//             gross += (help - 1200)*.2;
//             help = 1200;
//         } else {
//             gross += help*.15;
//             help = 0;
//         }
//     }

//     netto = brutto - gross;

//     return `
//         Brutto: ${brutto} PLN;
//         Netto: ${netto} PLN;
//         Gross: ${gross} PLN;
//     `;
// }

// cw2_10();





// Ćwiczenie 2.11

// const cw2_11 = () => {
// }

// cw2_12();





// Ćwiczenie 2.12

// const cw2_12 = () => {
// }

// cw2_12();