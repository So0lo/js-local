`use strict`;

let person = {
    name: `J`,
    age: 23,
    isPr: true,
    tech: [`Html`, `Css`, `Js`]
    //beg: run
};

let person2 = {
    name: `D`,
    age: 34,
    isPr: false,
    tech: [`Dig`, `Build`, `Run`]
    //beg: run
}

// function run () {
//     return 1;
// }
// func.func = function func () {
//     console.dir(func);
// }
// func.func();
// call apply bind
// function func (a, b) {
//     return a+b;
// }
// function run (bar, num) {
//     console.log(this.name + ` runs` + bar + num);
// }
// // run.call(person, `bar`, 200);
// // run.apply(person2, [`bar`, 200]);
// const runLink = run.bind(person, `bar`, 100);
// //runLink(`bar`, 200);
// runLink();



let person3 = {
    name: `Peter`,
    age: 41,
    isProgrammer: false,
    tech: [`Html1`, `Css1`, `Js1`]
};

let person4 = {
    name: `Gregory`,
    age: 54,
    isProgrammer: true,
    tech: [`Dig1`, `Build1`, `Run1`]
    // speak () {
    //     console.log(`${this.name} speaks to you!`);
    // }
}

const persons = [person, person2, person3, person4];

// function chekIsProgrammer (pr) {
//     return pr.isProgrammer;
// }
// const isAllProgrammers = persons.every(chekIsProgrammer);
// const isAnyProgrammers = persons.some(chekIsProgrammer);
// console.log(isAllProgrammers);
// console.log(isAnyProgrammers);

// setTimeout
// setInterval

//setTimeout(person4.speak.bind(person4), 2000);
//clearTimeout(launchid);

// let counter = 0;
// const intervalId = setInterval(function () {
//     console.log(`hello ${++counter}`);
// }, 1000);


// setTimeout(function () {
//     clearInterval(intervalId);
// }, 5000)





// // Задание

// let person = {
//     name: `John`,
//     age: 23,
//     isProgrammer: false,
//     becomeAprogrammer: becomeAprogrammer,
//     beOlder: beOlder,
//     becomeMister: becomeMister
// };

// function becomeAprogrammer () {
//     this.isProgrammer = this.isProgrammer || true;
// }

// function beOlder () {
//     this.age++;
// }

// function becomeMister () {
//     let name = this.name.split(`.`);
//     if (name[0] !== `Mr`) {
//         name.unshift(`Mr`);
//     }
//     this.name = name.join(`.`);
// }

// person.becomeAprogrammer();
// console.log(person);
// person.becomeAprogrammer();
// console.log(person);

// person.beOlder();
// console.log(person);
// person.beOlder();
// console.log(person);

// person.becomeMister();
// console.log(person);
// person.becomeMister();
// console.log(person);



// Задания 2


// 1

// const arr = [
//     {a:2, b:1},
//     {a:5, b:12},
//     {a:95, b:7}
// ];

// const valid = arr.every(({a, b}) => a > b);

// valid ? `its valid` : `its invalid`;


// // 2


// const arr = [
//     {a:2, b:1},
//     {a:5, b:12},
//     {a:95, b:7}
// ];

// const result = arr.map(({a,b}) => ({a, b: b**2}));

// console.log(result);


// // 3

// const arr = [
//     {a:2, b:1},
//     {a:5, b:12},
//     {a:95, b:7}
// ];

// const arr1 = arr.reduce(function(acc, {a, b}, i) {
//     if(!i) {
//         acc = [];
//     }
//     acc.push(a);
//     acc.push(b);
//     return acc;
// }, 0);
// console.log(arr1);

// 4


// persons.forEach(function (obj) {
//     let x = 1000;
//     obj.tech.forEach(function (elem) {
//         setTimeout(function () {
//             console.log(`${obj.name} can ${elem}`);
//         }, x);
//         x += 1000;
//     });
// });

let i = 0;
let x = 0;

const launchid = setInterval(function() {
    console.log(`${persons[i].name} can ${persons[i].tech[x]}`);
    x++;
    if(x === 3) {
        x = 0;
        i++;
    }
}, 1000);

setTimeout(function() {
    clearInterval(launchid);
}, persons.length * persons[0].tech.length * 1000);


