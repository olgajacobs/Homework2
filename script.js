// task 1 

let a = 20;
alert (a);

//task 2

const year = 2007;
alert (year);

//task 3

const name = 'Brendan Eich';
alert (name);

//task 4

let b = 10;
let c = 2;
alert (b + c);
alert (b - c);
alert (b * c);
alert (b / c);

//task 5

let d = 2;
let result = d **5;
alert (result)

//task 6

let e = 9;
let f = 2;
alert (e % f)

//task 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++ ;
num -- ;
alert(num);

//task 8

let age = prompt ('Сколько вам лет?');
alert (age);

//task 9

let user = {
    name: 'Алеша',
    age: 33,
    isAdmin: true,
};
user ['city of residence'] = 'Москва';
user.age = 35;
delete user ['city of residence'];
let info = prompt ('Какую информацию вы хотите узнать о пользователе?');
alert (user [info]);

//task 10

let userName = prompt ('Как тебя зовут?');
alert ("Привет " + userName +"!")