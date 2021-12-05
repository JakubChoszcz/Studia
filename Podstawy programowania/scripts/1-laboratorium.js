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

//     return window.alert(`Arithmetic average = ${aritAver}`);
// }

// cw1_2();










// Ćwiczenie 1.3

// const cw1_3 = () => {
//     let a = window.prompt('Enter 1. integer number: ');
//     a = parseInt(a);
//     let b = window.prompt('Enter 2. integer number: ');
//     b = parseInt(b);
    

//     const addition = a + b;
//     const multiplication = a * b;
//     const division = a / b;
//     const exponentiation = a**b;
//     const squareRoot = Math.sqrt(a);

//     return window.alert(` Addition = ${addition};\n Multiplication = ${multiplication};\n Division = ${division};\n Exponentiation = ${exponentiation};\n Square Root = ${squareRoot}; `);
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










// Ćwiczenie 1.5 - NIE DZIAŁA

// const cw1_5 = (x, y, z) => {
//     const p = Math.sqrt(x**2 + y**2 + z**2);
//     const tan = y/x;


//     return `${p}, ${tan}`;
// }

// cw1_5(-2, -1, 5);