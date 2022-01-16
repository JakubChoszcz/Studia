// ================================================
// ================ Laboratorium 5 ================ 
// ================================================





const PRIMARY_ARRAY = [5, -123, 4.5, 12, 27, -3.4, 54, -23.4, 67, -12, 0, -6, 6.7, 54.7, 9];





// // Ćwicznie 5.1

// const cw5_1 = (arr) => {
//     return arr.reduce((a, b) => a + b, 0);
// }

// cw5_1(PRIMARY_ARRAY);










// // Ćwicznie 5.2

// const cw5_2 = (arr) => {
//     let isSecond = false;

//     for (const nb of arr) {
//         if (nb % 3 === 0 && nb > 0) {
//             if (isSecond) {
//                 isSecond = false;

//                 console.log(nb);
//             } else {
//                 isSecond = true;
//             }
//         }
//     }
// }

// cw5_2(PRIMARY_ARRAY);










// // Ćwicznie 5.3

// const cw5_3 = (arr) => {
//     firstArrayCopy = [...arr];

//     console.log(firstArrayCopy);
// }

// cw5_3(PRIMARY_ARRAY);










// // Ćwicznie 5.4

// const cw5_4 = (arr) => {
//     let max = 0;
//     let min = 0;

//     arr.forEach((nb) => {if (nb > max) {max = nb}});
//     arr.forEach((nb) => {if (nb < min) {min = nb}});
    
//     return max - min;
// }

// cw5_4(PRIMARY_ARRAY);





const FIRST_ARRAY = [5, -123, 4.5, 12, 27];
const SECOND_ARRAY = [-3.4, 54, -23.4, 67, -12];
const THIRD_ARRAY = [0, -6, 6.7, 54.7, 9];





// // Ćwicznie 5.5

// const cw5_5 = (arr_1, arr_2, arr_3) => {
//     const newArr = [arr_1, arr_2, arr_3];

//     let sumOfArr = 0;
//     let maxOfArr = newArr[0][0];

//     for (const arr of newArr) {
//         let sum = 0;

//         for (const nb of arr) {
//             sum += nb;
//             sumOfArr += nb;

//             if (nb > maxOfArr) {
//                 maxOfArr = nb;
//             }
//         }

//         console.log(`Average = ${sum / 5}`);
//     }

//     console.log(`Max value = ${maxOfArr}, Average = ${sumOfArr / 15}`);
// }

// cw5_5(FIRST_ARRAY, SECOND_ARRAY, THIRD_ARRAY);










// // Ćwicznie 5.6

// const cw5_6 = (arr) => {
// }

// cw5_6(PRIMARY_ARRAY);





const WSPOLRZEDNE = [
    {'miasto':'Warszawa', 'dlugosc':21.0117800, 'szerokosc':52.2297700},
    {'miasto':'Wrocław', 'dlugosc':17.0333300, 'szerokosc':51.1000000},
    {'miasto':'Kraków', 'dlugosc':19.9365800, 'szerokosc':50.0614300},
];





// Ćwicznie 5.7

const cw5_7 = (arr) => {
    for (const obj of arr) {
        console.log(`Współrzędne dla ${obj['miasto']}: `);
    }
}

cw5_7(WSPOLRZEDNE);










// Ćwicznie 5.8

const cw5_8 = () => {
    
}

cw5_8();










// Ćwicznie 5.9

const cw5_9 = () => {
    
}

cw5_9();