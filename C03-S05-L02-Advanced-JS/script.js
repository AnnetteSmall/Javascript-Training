////function constructor
//
//var john = {
//    name: 'John',
//    yearofBirth: 1990,
//    job: 'Teacher'
//};
//
//var Person = function(name, yearOfBirth, job) {
//    this.name = name;
//    this.yearofBirth = yearOfBirth;
//    this.job= job;
//}
//
//Person.prototype.calculateAge = 
//    function() {
//    console.log(2017 - this.yearofBirth);
//}
//
//var john = new Person('John', 1990, 'Teacher');
//
//var jane = new Person('Jane', 1974, 'Gardner');
//
//var mark = new Person('Mark', 1985, 'Athlete');
//
//john.calculateAge();
//jane.calculateAge();
//mark.calculateAge();
//
//Person.prototype.lastName = 'Smith';
//
//console.log(john.lastName);
//console.log(jane.lastName);
//console.log(mark.lastName);


// Object.create

//var personProto = {
//    calculateAge: function(){
//        console.log(2017 - this.yearOgBirth);
//    }
//};
//
//var john = Object.create(personProto);
//john.name = 'John';
//john.yearOfBirth = 1960;
//john.job = 'teacher';
//
//var jane = Object.create(personProto, {
//    name: {value: 'Jane'},
//    yearOfBirth: {value: 1969},
//    job: {value: 'designer'}
//});


// primitives vs Objects
// primitives
var a = 30;
var b = 25;

b = 27;

//console.log(a);
//console.log(b);

//Objects
var obj1 = {
    name: 'John',
    aGe: 26
};
var obj2 = obj1;
obj1.aGe = 30;

//console.log(obj1.aGe);
//console.log(obj2.aGe);

//functions
var age =27;
var obj = {
    name: "Jonas",
    city: "Lisbon"
};

function change(a, b) {
    a = 30;
    b.city = 'San Fransisco';
}

change(age, obj);

//console.log(age);
//console.log(obj.city);

//functions
// passing functions as arguments

//var years = [1990, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//};
//
////callback functions
//function calculateAge(el) {
//    return 2017- el;
//}
//
//function isFullAge(el) {
//    return el >= 18;
//}
//
//function maxHeartrate(el) {
//    if (el >= 18 && el <= 81) {
//       return Math.round(206.9 - (0.67 * el)); 
//    } else {
//        return -1;
//    }
//    
//}
//
//var ages = arrayCalc(years, calculateAge);
//var fullAges = arrayCalc(ages, isFullAge);
//var rates = arrayCalc(ages, maxHeartrate);

//console.log(ages);
//console.log(fullAges);
//console.log(rates);

// functions returning functions

//function interviewQuestion(job) {
//    if (job === 'designer'){
//        return function(name){
//            console.log(name + ', can you please explain what UX design is?');
//        }
//    } else if (job === 'teacher'){
//        return function(name){
//            console.log('what subject do you teach, ' + name + '?');
//        }
//    } else {
//        return function(name){
//            console.log('Hello ' + name + ', what do you do?');
//        } 
//    }
//}

//var teacherQuestion = interviewQuestion('teacher');

//teacherQuestion('John');
//teacherQuestion('James');
//teacherQuestion('Lennard');
//teacherQuestion('Mike');
//
//
//interviewQuestion('teacher')('Mark')
//interviewQuestion('designer')('Mary')
//interviewQuestion('developer')('Annette')



// IIFE - Immediatly invoked function expression
// data can not be accessed

//(function (){
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//})();

// console.log(score);

//(function (goodLuck){
//    var score = Math.random() *10;
//    console.log(score >= 5 - goodLuck);
//})(5);

// Colsures

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2017 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementSA = retirement(66);

//retirementSA(1974);
//
//retirement(60)(1974);

// assigment

//function interviewQuestion(job) {
//    if (job === 'designer'){
//        return function(name){
//            console.log(name + ', can you please explain what UX design is?');
//        }
//    } else if (job === 'teacher'){
//        return function(name){
//            console.log('what subject do you teach, ' + name + '?');
//        }
//    } else {
//        return function(name){
//            console.log('Hello ' + name + ', what do you do?');
//        } 
//    }
//}

//function interviewQuestion2(job){
//   return function(name){
//       if (job === 'teacher'){
//        var question = 'What subject do you teach ?';
//    } else if (job === 'designer'){
//        var question = 'Can you please explain what UX design is?'
//    } else { 
//        var question = 'What do you do?'
//    }
//       console.log(name + ', ' + question);
//   }
//}
//
//interviewQuestion2('teacher')('Annette')
//
//interviewQuestion2('designer')('Kobie')
////or 
//var other = interviewQuestion2('RockStar')
//other('Devan')


// Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlement! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if(style === 'friendly') {
            console.log('What\'s up? I\'m, ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a awesome ' + timeOfDay + '!');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 25,
    job: 'designer'
};

john.presentation('formal', 'morning');

// method borrowing :- call.(#this#)

john.presentation.call(emily, 'friendly', 'afternoon');

// preset some of the variables

var johnFriendly = john.presentation.bind(john, 'friendly');
var emilyFormal = john.presentation.bind(emily, 'formal');

johnFriendly('morning')
emilyFormal('afternoon')

// example

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
};

//callback functions
function calculateAge(el) {
    return 2017- el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

// for this to work you need to bind the limit to 'this' because arrayCalc only have the one varable "age" (arr)

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan)

//




























