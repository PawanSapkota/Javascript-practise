//Data types

const name1 ='pawan';
console.log(typeof name1);


const number1=338;
console.log(typeof number1);


const it =true;
console.log(typeof it);


let name3;
name3='sapkota';
console.log(name3);

/// Let Var Const
//let is block level scope whereas the var is function based scope


var author='John';

{
    let author ='john';
    console.log(author)
}
console.log(author)


// Object with template literals
const car={
    name:"Nio",
    brand:"AI",
    model:2019

}
console.log(`My car name is ${ car.name},brand ${car.brand} and model ${car.model}`)


// Object with this
const person={
    name:"pawan",
    lastname:"sapkota",
    age:22,
    biography:function (){
        return this.name + this.lastname;
    }
}
console.log(person.biography())


// Use strict mode
x = 3.14;    // This will not cause an error.
myFunction();

function myFunction() {    
  //"use strict";
 // y = 3.14;  // This will cause an error (y is not defined).
}


//Type conversion cohersion

const car1 ="BMW";
console.log(Number(car1))


const year="2020";
console.log(Number(year + 13))
console.log(year)


//Operators === and ==

const age=18;
if (age === 18){
    console.log("You are eligible for vote!")
}else{
    console.log("You are not eligible:")
}

const age1 ="16";
 if (age1 === 16){
    console.log("You will get citizen.");

 }else{
    console.log("You will not get the citizen");
 }


 // statement and expressions

 const name34 ="pawan";
console.log(` ${name34} is expressions and we can use it to get the value whereas we cannot use it in 
if statements or else if`);

const age56=23;
if (age >=16){
    console.log(`you are young .`)
}


 // Conditional ternary operators

const years =20;
years >= 18 ? console.log("You are handsome.") :
 console.log("You are ugly.")

let ages;
 console.log(ages);