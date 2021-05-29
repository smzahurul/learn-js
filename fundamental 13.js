// 13-1 Fundamental Javascript:
var studentAge = [16, 17, 18, 19];
console.log(studentAge);
console.log(studentAge.length);
console.log(studentAge);
studentAge.push(20);
studentAge.push(11);
console.log(studentAge);
studentAge.pop();
console.log(studentAge);
studentAge[3] = 21;
console.log(studentAge);
var indexNumber = studentAge.indexOf(18);
console.log(indexNumber);
console.log(studentAge);
var teaShop = ['Namdir', 'Nahin', 'palam']
console.log(teaShop);
teaShop.unshift('Lavly', 'Balam', 'Jalam');
console.log(teaShop);
teaShop.shift();
console.log(teaShop);
var part = teaShop.slice(1, 4);
console.log(part)

// While Loop:
var num = 0;
while (num < 15) {
    console.log(num);
    num++;
}
var number1 = 0;
while (number1 <= 20) {
    console.log(number1);
    number1 = number1 + 1
}
// for loop:

var friendsName = ['Rana', 'Yousuf', 'Faruk', 'Sohel', 'Monir', 'Don'];
for (var i = 0; i < friendsName.length; i++) {
    var allName = friendsName[i];
    console.log(allName);
}

var love = [10, 20, 30, 40, 50];
for (var z = 0; z < love.length; z++) {
    var you = love[z];
    console.log(you)
}

//switch:
var zahurul = new Date();
var toDay = zahurul.getDay();
switch (toDay) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
    default:
        console.log('Not a valid Number');
}

function sayLoveYou() {
    console.log('Say O baby I love you');
    console.log('Billy o baby ....Koi Tumi');
}
sayLoveYou();

function dubleIt(num) {
    var result = num * 2;
    console.log(result);
}
dubleIt(500);
dubleIt(50);
dubleIt(20);

function zIslam(num1) {
    var result1 = num1 * 2;
    return result1;
}

const bb = zIslam(20)
console.log(bb);
var first = zIslam(40)
var second = zIslam(60);
console.log(first, second);

function add(num3, num4) {
    var result3 = num3 + num4;
    return result3;
}
var sum = add(15, 17)
console.log(sum);