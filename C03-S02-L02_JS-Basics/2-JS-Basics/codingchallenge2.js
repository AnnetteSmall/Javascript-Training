var years = [1998, 1999, 2011, 2013];
var kids = new Array;
var fullAge = new Array;
//for (var i = 0; i < years.length; i++) {
//    var age = 2017 -  years[i];
//    kids.push(age)
//}
//
//for ( i = 0; i < kids.length; i++) {
//    if (kids[i] > 17) {
//        console.log('Child is now '+ kids[i]+ ' and therfor of full age')
//    }
//}

function printFullAge (years) {
    fullAge = [];
    kids = [];
   for (var i = 0; i < years.length; i++) {
    var age = 2017 -  years[i];
    kids.push(age)
}
for ( i = 0; i < kids.length; i++) {
    if (kids[i] > 17) {
        console.log('Child is now '+ kids[i]+ ' and therfor of full age');
        fullAge.push(true)
    } else {
        fullAge.push(false)
    }
    
}
    return fullAge
    
}

var list1 = [1998, 1999, 2011, 2013];
var list2 = [1995, 2006, 2011, 2013];

var full_1 = printFullAge(list1);
console.log('Full age 1 is : ' + full_1)

var full_2 = printFullAge(list2);
console.log('Full age 2 is : ' + full_2)
