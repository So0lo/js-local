// 1

function carry () {
    let sum = 0, count = 0;
    return function (num) {
        sum += num;
        count++;
        if (count === 3) {
            console.log(sum);
        }
        return sum;
    }
}

const carriedSum = carry();
carriedSum(2);
carriedSum(3);
carriedSum(4);


// // 2 ver1

// function foo () {
//     let sum = 0;
//     return function (num) {
//         if (num === undefined) {
//             console.log(sum);
//             return sum;
//         } else {
//             sum += num;
//             return sum;
//         }
//     }
// }

// const carriedSum = foo();
// carriedSum(2);
// carriedSum(3);
// carriedSum(4);
// carriedSum(3);
// carriedSum();


// 2 ver2

// function foo () {
//     let sum = 0;
//     return function (num) {
//         if (num === false) {
//             console.log(sum);
//         } else {
//             sum += num;
//         }
//     }
// }

// function func (Sum) {
//     Sum(2);
//     Sum(3);
//     Sum(4);
//     Sum(3);
//     return false;
// }

// const Sum = foo();
// Sum(func(Sum));


// // 3

// function reduceFunc(numElem, countElem, ...rest) {
//     const arrCopy = [];
//     let i = 0, i1 = numElem , j1 = 0, i2 = numElem + rest.length, j2 = numElem + rest.length - (rest.length - countElem),
//     i3 = numElem + rest.length, j3 = numElem + rest.length + (countElem - rest.length);
//     return function (arr, reduceVer) {
//         if (i < numElem) {
//             arrCopy[i] = arr[i];
//             i++;
//             reduceVer(arr, reduceVer);
//         }
//         if (i1 < numElem + rest.length) {
//             arrCopy[i1] = rest[j1];
//             i1++, j1++;
//             reduceVer(arr, reduceVer);
//         }
//         if (countElem <= rest.length) {
//             if (j2 < arr.length) {
//                 arrCopy[i2] = arr[j2];
//                 i2++, j2++;
//                 reduceVer(arr, reduceVer);
//             }
//         } else {
//             if (j3 < arr.length) {
//                 arrCopy[i3] = arr[j3];
//                 i3++, j3++;
//                 reduceVer(arr, reduceVer);
//             }
//         }
//         return arrCopy;
//     }
// }

// let arr = [2, 3, 4 , 5, 6, 9, 12, 23, 43, 54];
// const reduceVer = reduceFunc(1, 2, 25, 42, 36);
// const arrCopy = reduceVer(arr, reduceVer);
// console.log(arrCopy);




