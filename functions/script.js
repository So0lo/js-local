// let arr = [1, 2, 3 ,4];
// let arr2 = [5, 6, 3 ,7];
// console.log(`The result is ` + getAverage(arr));
// console.log(`The result is ` + getAverage(arr2));
// // function declaretion
// function getAverage (mas) {
//     let sum = 0;
//     for (let i =0; i < mas.length; i++) {
//         sum += mas[i];
//     }
//     let result = sum / mas.length;
//     return result;
// }

// // function expression
// const mul = function (a, b) {
//     return a * b;
// };

// // first class object
// const arr = [getAverage, mul];
// console.log(mul(2, 3));

// // Анонимная самовызывающая функция
// (function () {
// })()


// 1

// function isNumber (num) {
//     if (num === null || isNaN(num)
//      || typeof num === ``) {
//         return false;
//     } else {
//         return true;
//     }
// }

// // 2

// let arr = new Array(4);
// let x = 0;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] =  +prompt(`Введите оценку ${i+1} четверти`);
//     if (isNumber(arr[i])) {
//         continue;
//     } else {
//         x++;
//         break;
//     }
// }

// if (x) {
//     console.log(`Error`);
// } else {

// function getNum (num1, num2, num3, num4) {
//     return (num1 + num2 + num3 + num4) / 4;
// }

// console.log(getNum(arr[0], arr[1], arr[2], arr[3]));
// }


// // 3

// function getProcent (numWin, numLose) {
//             let sumMatches = numWin + numLose;
//             let procent = 100 / sumMatches;
//             return numWin * procent;
//         }

// let numWin = +prompt(`Введите кол-ов побед`);
// let numLose = +prompt(`Введите кол-во поражений`);

// if (isNumber(numWin) && isNumber(numLose)) {
//         console.log(getProcent(numWin, numLose));
//     } else {
//         console.log(`Error`);
//     }


// // 4

// function getArr (length) {
//         let arr1 = [];
//         for (let i = 0; i < length; i++) {
//             arr1.push(Math.round(Math.random() * 10));
//         }
//         return arr1;
// }

// let arr;
// let length = +prompt(`Введите длину массива`);

// if (isNumber(length)) {
//     arr = getArr(length);
// } else {
//     console.log(`Error`);
// }

// console.log(arr);

// камень, ножницы, бумага

// function validator (vvod) {
//     return vvod !== `камень` &&
//     vvod !== `ножницы` &&
//     vvod !== `бумага`;
// }

// function getVvodUser () {
//     let vvodUser;
//     do {
//         vvodUser = getVvodUserValid();
//         if (vvodUser === false) {
//             console.log(`Error`);
//         }
//         if (vvodUser === `выход`) {
//             break;
//         }
//     } while (vvodUser === false);
//     return vvodUser;
// }

// function getVvodUserValid () {
//     let returnVvod = prompt(`  
//     Введите выбор.
//     камень
//     ножницы
//     бумага
//     или выход для выхода
//     `);
//     if (returnVvod === `выход`) {
//         return `выход`;
//     }
//     if (validator(returnVvod)) {
//         return false;
//     } else {
//         return returnVvod;
//     }
// }

// function getVvodComp (random) {
//     if (random === 0) {
//         return `камень`;
//     } else if (random === 1) {
//         return `ножницы`;
//     } else {
//         return `бумага`;
//     }
// }

// function getResult (user, comp) {
//     if (user === comp) {
//         return 0;
//     }
//     if (user === `камень` && comp === `ножницы`) {
//         return 1;
//     } else if (user === `камень`) {
//         return 2;
//     }
//     if (user === `ножницы` && comp === `бумага`) {
//         return 1;
//     } else if (user === `ножницы`) {
//         return 2;
//     }
//     if (user === `бумага` && comp === `камень`) {
//         return 1;
//     } else if (user === `бумага`) {
//         return 2;
//     }
// }

// function getFinishText (userWin, compWin) {
//     console.log(`Конец`);
//     if (userWin > compWin) {
//          console.log(`Победил пользователь со счетом ${userWin}:${compWin}`);
//     } else {
//         console.log(`Победил компьютер со счетом ${userWin}:${compWin}`);
//     }
// }

// function getGame () {
//         const vvodUser = getVvodUser();
//         if (vvodUser === `выход`) {
//             return 0;
//         }
//         const vvodComp = getVvodComp(Math.round(Math.random() * 2));
//         console.log(`У пользователя ${vvodUser}
//     У компьютера ${vvodComp}`);
//         if (getResult(vvodUser, vvodComp) === 1) {
//            return 1;
//         } else if (getResult(vvodUser, vvodComp) === 2) {
//             return 2;
//         } else {
//             return 3;
//         }
// }

// function startGame () {
//     let userWin = 0;
//     let compWin = 0;
//     let x;
//     for (let i = 0; ; i++) {
//         x = getGame();
//         if (x === 0) {
//             console.log(`Выход`)
//             break;
//         }
//         if (x === 1) {
//             userWin++;
//             console.log(`Победил пользователь`);
//         }
//         if (x === 2) {
//             compWin++;
//             console.log(`Победил компьютер`);
//         }
//         if (x === 3) {
//             console.log(`Ничья, переигровка`);
//             i--;
//             continue;
//         }
//         if (userWin === 10 || compWin === 10) {
//             break;
//         }
//         console.log(`Счет ${userWin}:${compWin}`);
//     }
//     if (x) {
//         getFinishText(userWin, compWin);
//     }
// }

// startGame();




function func (a, b) {
    console.log(arguments);
}

