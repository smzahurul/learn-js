"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('Hello Bangladesh');
console.log('Hello World');
console.log('I Love Programming');
console.log('I Love Javascript');
console.log('this number ' + 9);
console.log('9' + 9);
var a = 50;
var b = 50;
var c = a + b;
console.log(c);
var ab = 59;
var cd = 100;
var d = ab + cd;
console.log(d);
var age = 50;
var date = 52;
var avarage = age + date;

var parson = function parson(first, secend) {
  _classCallCheck(this, parson);

  this.first = first;
  this.second = secend;
  return first + ' ' + secend;
};

var outPut = new parson("sumon", "khan");
console.log(outPut);