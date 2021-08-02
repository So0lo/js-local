// let adultAge = 18, userAge = 22;

// console.log( userAge > adultAge && userAge > 0);

// let userAge = 25;

// if (userAge > 18 && userAge < 100) {
//     console.log('Hello mister/miss');
// } else if (userAge > 100) {
//     console.log('rest in peace');
// } else {
//     console.log('smth');
// }

//1

// let userOne = prompt('Введите возраст первого пользователя'), 
// userTwo = prompt('Введите возраст второго пользователя');

// if (!userOne || !userTwo) {
//     console.log('Ошибка');
// } else {
//     userOne = +userOne;
//     userTwo = +userTwo;
//     if(userOne > userTwo) {
//         console.log('Старший первый' + userOne);
//     } else if(userOne < userTwo) {
//         console.log('Старший второй' + userTwo);
//     } else {
//         console.log('Они ровесники');
//     }
// }

//2

// let userAge = Number(prompt('Введите возраст'));

// if (userAge > 0 && userAge <= 10) {
//     console.log('Привет мальчик');
// } else if (userAge >= 11 && userAge <= 18) {
//     console.log('Привет подросток');
// } else if (userAge >= 19 && userAge <= 40) {
//     console.log('Здарова пацан');
// } else if (userAge >= 41 && userAge <= 80) {
//     console.log('Добрый вечер');
// } else if (userAge >= 81 && userAge <= 100) {
//     console.log('Здравия желаю');
// }

//3

// let one = Number(prompt('Введите первое число')), 
// two = Number(prompt('Введите второе число')),
// three = Number(prompt('Введите третье число'));

// //console.log(Math.max(one, two, three));

// if (one > two && one > three) {
//     console.log('Первое число больше')
// } else if (one < two && two > three) {
//     console.log('Второе число больше')
// } else if (one < three && two > three) {
//     console.log('Третье число больше')
// }

//4

// let one = Number(prompt('Введите первое число')), 
// two = Number(prompt('Введите второе число')),
// three = Number(prompt('Введите третье число'));

// if(isNaN(one) || isNaN(two) || isNaN(three)) {
//     console.log('Нужно вводить числа');
// } else {
//     console.log((one + two + three) / 3);
// }

