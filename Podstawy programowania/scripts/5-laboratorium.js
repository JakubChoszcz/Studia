// ================================================
// ================ Laboratorium 5 ================ 
// ================================================



const PRIMARY_ARRAY = [5, -123, 4.5, 12, 27, -3.4, 54, -23.4, 67, -12, 0, -6, 6.7, 54.7, 9];



// // Ćwicznie 5.1

// const cw5_1 = (arr) => {
//     return arr.reduce((a, b) => a + b, 0);
// };

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
// };

// cw5_2(PRIMARY_ARRAY);










// // Ćwicznie 5.3

// const cw5_3 = () => {
//     const initialTable = [{ id: 1 }, { id: 2 }];
//     let firstTable = [{ id: 3 }, { id: 4 }];
//     let secondTable = [{ id: 5 }, { id: 6 }];

//     const copyTable = (sourceTable, destinyTable) => {
//         return destinyTable = [ ...destinyTable, ...sourceTable ];
//     }

//     copyTable(initialTable, firstTable);
//     copyTable(initialTable, secondTable);
// };

// cw5_3();










// // Ćwicznie 5.4

// const cw5_4 = (arr) => {
//     const array = arr.sort((a, b) => b - a);

//     let max = array[0];
//     let min = array[array.length - 1];
    
//     return max - min;
// };

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










const STRUCTURE = [
    {
        pesel: 70050847935,
        data: {
            firstName: 'Michael',
            secondName: 'Jeffrey',
            lastName: 'Jordan'
        }
    },
    {
        pesel: 82011232995,
        data: {
            firstName: 'LeBron',
            secondName: '',
            lastName: 'James'
        }
    },
    {
        pesel: 50041727598,
        data: {
            firstName: 'Kobe',
            secondName: 'Bean',
            lastName: 'Bryant'
        }
    }
];



// // Ćwicznie 5.6

// const cw5_6 = (structure) => {
//     for (const person of structure) {
//         const { pesel, data } = person;

//         console.log(`${data.firstName} ${data.secondName && `${data.secondName.slice(0, 1)}.` } ${data.lastName} ${pesel}`);
//     }
// };

// cw5_6(STRUCTURE);










const WSPOLRZEDNE = [
    {miasto: 'Warszawa', dlugosc: 21.0117800, szerokosc: 52.2297700},
    {miasto: 'Wrocław', dlugosc: 17.0333300, szerokosc: 51.1000000},
    {miasto: 'Kraków', dlugosc: 19.9365800, szerokosc: 50.0614300}
];



// // Ćwicznie 5.7

// const coordinatesConverter = (coord) => {
//     const coordText = coord.toString().split('.');

//     const deg = coordText[0];
//     const frac = +`0.${coordText[1]}`;
//     const min = Math.floor(frac * 60);
//     const sec = ((frac * 60 - min) * 60).toFixed(3);

//     return `${deg}°${min}'${sec}"`;
// };



// const cw5_7 = () => {
//     for (const obj of WSPOLRZEDNE) {
//         console.log(`Współrzędne dla ${obj['miasto']}: ${coordinatesConverter(obj['szerokosc'])} N szerokość, ${coordinatesConverter(obj['dlugosc'])} E długość`);
//     }
// };

// cw5_7();











const STUDENTS = [
    { 
        id: 1, 
        firstName: 'Gertrude', 
        lastName: 'Moreno',
        averageGrade: 3.33,
        pairs: { math: 4, english: 3, history: 4 } 
    },
    { 
        id: 2, 
        firstName: 'Mark', 
        lastName: 'Carr', 
        averageGrade: 3.66,
        pairs: {  math: 3, english: 5, history: 3 } 
    },
    { 
        id: 3, 
        firstName: 'Jeanne', 
        lastName: 'Hall', 
        averageGrade: 4.33,
        pairs: { math: 5, english: 5, history: 3 } 
    }
];



// // Ćwicznie 5.8

// const studentFormater = (student) => {
//     return `id: ${student.id},\nfirst name: ${student.firstName},\nlast name: ${student.lastName},\naverage grade: ${student.averageGrade}\npairs: ${JSON.stringify(student.pairs)}`
// };



// const cw5_8 = () => {
//     const answer = window.prompt(`What do You want to do?\n(1) Find by ID\n(2) Retur all students`);

//     switch (answer) {
//         case '1' :
//             let selectedStudent = 'There is no student with coresponding ID'
//             const studentID = window.prompt(`Please type the ID of a student`);
        
//             for (const student of STUDENTS) {
//                 if (studentID == student.id) {
//                     selectedStudent = studentFormater(student);
//                 }
//             }

//             return console.log(selectedStudent);
//         case '2' :
//             const usersList = [];

//             for (const student of STUDENTS) {
//                 console.log(studentFormater(student));
//             }
//     }
// };

// cw5_8();










const ULGI = [
    { 
        'nazwa skrócona ulgi': 'noworodek',
        'wartość': { 
            'ulga w procentach': 100, 
            'opis ulgi': 'ulga przysługująca osobom do 2 roku życia', 
            'wiek': 2
        }
    },
    { 
        'nazwa skrócona ulgi': 'dziecko',
        'wartość': { 
            'ulga w procentach': 60, 
            'opis ulgi': 'ulga przysługująca osobom do 12 roku życia', 
            'wiek': 12
        }
    },
    { 
        'nazwa skrócona ulgi': 'nastolatek',
        'wartość': { 
            'ulga w procentach': 30, 
            'opis ulgi': 'ulga przysługująca osobom do 18 roku życia', 
            'wiek': 18
        }
    }
];



// // Ćwicznie 5.9

// const cw5_9 = () => {
//     for (const ulga of ULGI) {
//         console.log(`Skrócona nazwa ulgi: ${ulga["nazwa skrócona ulgi"]}`);
//     }

//     let userAge = window.prompt('Podaj swój wiek');
//     userAge = +userAge;

//     for (const ulga of ULGI) {
//         if (userAge <= ulga.wartość.wiek) {
//             return console.log(`Przysługuje Ci ulga z tytułu '${ulga["nazwa skrócona ulgi"]}', wynosząca ${ulga.wartość["ulga w procentach"]}%`);
//         }
//     }
// };

// cw5_9();