///////////////////////////////////////
console.log("*****************")
console.log('Lecture: Hoisting')
console.log("*****************")

calculateAge(1974);

function calculateAge(year) {
    console.log("Age calculated inside function : " + (2017-year));
}

var retirement = function(year) {
    console.log('Years to retirment calculated in function :' + (65-(2017-year)));
}

retirement(1974);

//variables
console.log(age);
var age = 2017-1974;
console.log('Age assigned before foo function: ' + age);

function foo() {
    var age = 65;
    console.log('Age in foo function : ' + age);
}

foo();
console.log('Age after foo function :' + age);
 


///////////////////////////////////////
console.log("*****************")
console.log(' Lecture: Scoping')
console.log("*****************")


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
        third()
    }
}

function third(){
    var d ="John";
    console.log(a + d)
}


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
console.log("*************************")
console.log('Lecture: The this keyword')
console.log("*************************")
// 

//console.log(this);
//
//calculateAgeB(2012);
//
//function calculateAgeB(year){
//    console.log(2017-year);
//    console.log(this);
//}

var yearofbirth = 1968;

var john = {
    name: 'John',
    yearofbirth: 1974,
    calculateAgeB: function(){
        console.log(this);
        console.log(2017-this.yearofbirth);
        
        function inner() {
            console.log(this);
        }
        inner()
}
}

john.calculateAgeB();





