console.log('practise 12');


// conversion
console.log(Number('23'));
console.log(+('23'))

// parsing
console.log(parseInt('20ert'));
console.log(parseInt('etr20'));

// Square Root
console.log(Math.sqrt(25));
console.log(25**(1/2));
console.log(8 **(1/3))

// Min : returns the minimum value from elements
console.log(Math.min(23,4,7,1,5,8))
console.log(Math.max(23,45,89,100,32))

//For random number
console.log(Math.trunc(Math.random() * 6)+1);

 const betweenTheNumber1 = (min,max)=>{
    Math.trunc(Math.random() * (max-min + 1) + min);
}
const outputs =betweenTheNumber1(10,20);
console.log(outputs)
// console.log(betweenTheNumber1(10,20))


//Dates
const date = new Date();

console.log(date.getDay());
console.log(date);

console.log(new Date('Aug 2 2022 15:30:40'));
console.log(new Date('December 14, 2020'));
console.log(new Date('Oct 19, 2000'));
console.log(new Date (2000, 9 ,19, 12, 13, 40))

console.log(new Date(0));

// Working with dates
const dates = new Date('Aug 2 2022 15:30:40');
console.log(dates);
console.log(dates.getFullYear());
console.log(dates.getMonth());
console.log(dates.getDay());
console.log(dates.getHours());

console.log(Date.now());
dates.setFullYear(2025);
console.log(dates)

