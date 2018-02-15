//Lecture Variables 1
var name = 'john';
//console.log(name);
var surname = 'doe';
//console.log(surname);
var age = 42;
//console.log(age);
var fullAge = true;
//console.log(fullAge);
//console.log(name + ' ' + surname + ' is currently '+ age + ' years old');
//var lastname = prompt('What is the last name..');
//console.log(lastname);
//alert(name + ' ' + lastname + ' is currently '+ age + ' years old')

//Operators
name = 'Lawrie';
var now = 2017;
var birthyear = now - age;
birthyear = now - age * 2;
// multiply, division before add & minus - codingheros.io/resourses/ --> operator precedence

//var agejohn = 3 + 2 * 4 - 6;
//var agemark = (3 + 2) * 4 - 6;
//console.log(agejohn);
//console.log(agemark);
var lawrieIsmarried = 'no';
var lawrie = annette = 'sexy'
var agelawrie = agesusan = 50
agelawrie ++ // agelawrie = agelawrie +1
agesusan *= 2 // agesusan = agesusan *2
//console.log(agelawrie);
//console.log(agesusan);

//lecture: if/else statements
if (lawrieIsmarried === 'yes') {
//    console.log(name + ' is married');
} else {
//    console.log( name + ' is very happy');
}

lawrieIsmarried = false;
if (lawrieIsmarried) {
//    console.log(name + ' is married');
} else {
//    console.log( name + ' is very happy');
}

if (23 == '23'){
//    console.log('javascript does type conversion')
}

if (23 === '23'){
//    console.log('this is not the same - string does not = number')
} else {
//    console.log(' when using 3 x = it has to be the same type aswell')
}

age = prompt('How old are you');

if (age <= 20 ){
    alert('party on dude!')
}else if(age >20 && age <= 30) {
    alert('Cocktails ?')
}else {
    alert('Go to bed you need some serious beauty sleep')
}

var job = prompt('What is your job? ');
switch(job){
    case 'teacher':
        console.log('You have a lot of patients');
        break;
    case 'driver':
        console.log('Hope you have a nice car');
        break;
    case 'developer':
        console.log('Lets make some sexy code together');
        break;
    default:
        console.log('Whatever....');
}

//Objects 
