var mangoPrice = 200;
var bananaPrice = 40;
var maltaPrice = 200;

console.log(mangoPrice);
console.log(bananaPrice);
console.log(maltaPrice);

var myName = 'I am Zahurul Islam,';
var java = 'I know Javascript,';
var job = 'I am Full Stack developer in international software development ltd.';
var age = 30;
var hoby = 'Programing luran.';

console.log(myName + java + job + age + hoby);

var waterPrice = 30;
console.log(waterPrice);

var potatoPrice = 35;
console.log(potatoPrice);

var rice = 60;
console.log(typeof rice);

var geePrice = 'bangladesh';
console.log(typeof geePrice)

var rech = 100;
var hot = 50;
var cool = rech > hot;
console.log(cool);

var a = 50;
b = 50;
ab = a < b;
console.log(ab);
var userName = 'My name is Sm zahurul islam';
console.log(userName.toLowerCase());
var heroName = 'Hero alom';
console.log(heroName.toUpperCase());
var officeDescription = 'gta Sports Ltd.';
console.log(officeDescription.split('Sports'));
var nameMango = 'I am javascript programmer';
console.log(nameMango.indexOf('javascript'));
var nameBanana = 'Programmer is hard worker';
console.log(nameBanana.split(' '));

// interger flot parseint parseflot type conversion:

// var number1 = 25;
// var number2 = '15.5';
// number1 = '' + number1
// number2 = parseFloat(number2);
// number2 = parseInt(number2);
// number2 = +number2;
// console.log(number1 + number2);
// console.log(number1 + number2);
// console.log(typeof number1)
var number3 = 0.1;
var number4 = 0.2;
var total = number3 + number4;
total = total.toFixed(1);
console.log(total);

// 12-7 Mathematical operator:
var price1 = 'Jastin';
var name = 'Biber';
var result = price1 + ' ' + name;
// var price2 = 35;
// price2 = price2 + 1
// price2++;
// price2--;
// var total = price1 + price2;
// var a = 80;
// var b = 20;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(total);
// console.log(price2)
console.log(result);

//12-8 Math absolute round floor ceil random:
// var number = -5;
// var absoluitNumber = Math.abs(number);
// console.log(absoluitNumber);
// var number1 = 5.9999;
// var result = Math.round(number1);
// var result =Math.ceil(number1);
// var result1 = Math.floor(number1);
// var ramdomNumber=15.000;
var number = Math.random() * 100;
var result1 = Math.round(number);
console.log(result1);

// 12-9 Make conditional decision if else,comparison:
var bananaPrice = 15;
if (bananaPrice > 8) {
    console.log('I am eit banana')
} else {
    console.log('I No banana eit')
}
var cackPrice = 15;
if (cackPrice < 10) {
    console.log('Ami cack khabo')
} else {
    console.log('Ami cack khabo na')
}
var chokoletPrice = 10;
if (chokoletPrice != 10) {
    console.log('I Eat Chokolet')
} else {
    console.log('I not Eat Chokolet')
}

// 12-10Multiple conditions,fulfill both conditions else if:
// var jobPaiso = true;
// var savingAmount = 500000;
// if (jobPaiso == true && savingAmount > 200000) {
//     console.log('Aso tomer patri khuji')
// } else {
//     console.log('Tor kopale biya nai')
// }

var jobPaiso = true;
var savingAmount = 100000;
if (jobPaiso == true || savingAmount > 200000) {
    console.log('Aso tomer patri khuji')
} else {
    console.log('Tor kopale biya nai')
}
var marks = 99;
if (marks > 79) {
    console.log('Gread Point A+');
} else if (marks > 74) {
    console.log('Gread Point A');
} else if (marks > 69) {
    console.log('Gread Point A-');
} else if (marks > 64) {
    console.log('Gread Point B+');
} else if (marks > 59) {
    console.log('Gread Point B');
} else if (marks > 54) {
    console.log('Gread Point B-');
} else if (marks > 49) {
    console.log('Gtead point C+');
} else if (marks > 44) {
    console.log('Gread point C');
} else if (marks > 32) {
    console.log('Gread Point D');
} else {
    console.log('Gread Poinr F');
}

// 12-11 date timezone:
var date = new Date('1971-12-16');
console.log(date);