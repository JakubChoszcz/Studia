// ================================================
// ================ Laboratorium 2 ================ 
// ================================================










// Ćwicznie 2.1

// const cw2_1 = () => {
//     let y = window.prompt('Podaj liczbę lat:');
//     y = Number(y);

//     const yToDays = y*365;

//     return `Years: ${y}; Days: ${yToDays}`;
// }

// cw2_1();










// Ćwiczenie 2.2 - NIE DZIAŁA

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

// cw2_4();










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
//         Gross: ${gross} PLN;`;
// }

// cw2_9();










// Ćwiczenie 2.10

// const cw2_10 = () => {
//     let ans = window.prompt('1) 30 PLN/h 2) 40 PLN/h 3) 50 PLN/h 4) 60 PLN/h 5) wyjdź');
    
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
//     window.confirm('Pomyśl o liczbie od 1 do 100, a ja spróbuję ją odgadnąć!');

//     let gameStatus = true;

//     let min = 0;
//     let max = 100;

//     let numOfAtt = 1;

//     while (gameStatus) {
//         let nMin = Math.floor(Math.random() * (max - min) + min);
//         let nMax = Math.floor(Math.random() * (max - min)) + min;

//         let pcTry = Math.floor(Math.random() * (max - min)) + min;

//         if (window.confirm(`Czy twoja liczba jest większa od ${nMin}?`)) {
//             min = nMin;
//             nMax = Math.floor(Math.random() * (max - min)) + min;
//             pcTry = Math.floor(Math.random() * (max - min)) + min;
//         }

//         if (window.confirm(`Czy twoja liczba jest mniejsza od ${nMax}?`)) {
//             max = nMax;
//             pcTry = Math.floor(Math.random() * (max - min)) + min;
//         }


//         if (window.confirm(`Czy twoją liczbą jest ${pcTry}?`)) {
//             return window.alert(`Zgadłem twoją liczbę za ${numOfAtt} razem!`);
//         }

//         numOfAtt++;
//     }
// }

// cw2_11();










// Ćwiczenie 2.12

// const cw2_12 = () => {
//     let isPogramWorking = true;

//     while (isPogramWorking) {
//         const ans = window.prompt(` 1) dodaj\n 2) odejmij\n 3) pomnóż\n 4) podziel `)

//         let num1 = window.prompt('Podaj pierwszą liczbę:');
//         num1 = Number(num1);
//         let num2 = window.prompt('Podaj drugą liczbę:');
//         num2 = Number(num2);

//         if (num1 != '' && num2 != '') {
//             switch (ans) {
//                 case '1':
//                     return window.alert(num1 + num2);
                    
//                 case '2':
//                     return window.alert(num1 - num2);
                    
//                 case '3':
//                     return window.alert(num1 * num2);
                    
//                 case '4':
//                     return window.alert(num1 / num2);
//             }

//             isPogramWorking = false;
//         }
//     }
// }

// cw2_12();