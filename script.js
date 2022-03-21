//  ЦИКЛЫ

// i++ Прибавление диницы к элементу
// i++ Убавление на единицу

// var i = 0;

// console.log(i++);

// console.log(i);

// var i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
                                // y

// let i = 20;
// do {
//     console.log(i);
//     i--
// } while (i => 0);

// isNan() проверка на строку, то есть если в скобки попадает строка функция возвращает true
// !isNan()проверка на число, то етсь если попадает число , функция возвращает true
// FOR


// let локальное объявление переменной 
// var глобальное  объявление переменной
// const 

// for (let i = 0; i < 10; i++) {
//         console.log(i);
// }

// let num = prompt('Введите пороль!');

// num = num =='Введите пороль!' ? 'Welcome' : 'Wrong Password';

// alert(num)
// 
// let num = prompt('Введите число'),
    // equat = prompt('Введите степень'),
    // answer = 0;
// for (let i = 1; i < num; i++) {
    // answer = answer * i;
    // console.log(answer);
// }

// function sum(num1, num2) {
//     return num1 + num2
    // }

// let ans1 = sum(50 + 50),
//     ans2 = sum(50 + 50),
//     ans3 = sum(50 + 50);

    // Math это работа с математикой
    // Math.random() - отдает случайное число от 0 до 1 (1 никогда не выводится)

    // alert(Math.random())

function rand() {
    return Math.floor(Math.random() * 15 + 1);
}
console.log(rand());