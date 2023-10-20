console.log('Closer look at function');

const flight ='LH234';
const jonas ={
    name:'Jonas Schemedet',
    passport:123454443
}

const checkIn =(flightNumber,passenger)=>{
    flightNumber='LH999',
    passenger.name= 'Mr.'+passenger.name

    if(passenger.passport === 123454443){
        alert('Check In')
    }else{
        alert ('Wrong Passport')
    }

}
checkIn(flight,jonas)
console.log(jonas,flight)
console.log(flight)

// Same ass doinh this...
 const flightNumber =flight;
 const passenger =jonas;

 console.log(flightNumber,jonas)


 // Functions retturning callback functions

 const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
 }

 const upperFirstWord =function(str){
    const [first,...others]=str.split('');
    return [first.toUpperCase(),...others].join('')
 }
 console.log(upperFirstWord('js is the name'))

 // Higher order Functions

 const transformer =function(str,fn){
    console.log(`original string:${str}`);
    console.log(`Transformed string:${fn(str)}`);
    console.log(`Transformed by:${fn.name}`)
 }
 transformer('Javascript is the best language', upperFirstWord)
 transformer('Javascript is THE best language', oneWord)


 // Function calling Functions

 const greet =function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
 }
 const greeterHey= greet('Hey');
 greeterHey('Pawan');

 greet('hey')('Jonas');

 const greet1 =(greeting1)=>{
    return (name1)=>{
        console.log(`${greeting1} ${name1}`)
    }
 }
 const greeterHey1 =greet1('Hello');
 greeterHey1('John');

 greet1('Hello')('John')



 // calling and apply method

 const lufthansa ={
    airline:'Lufthansa',
    iatacose:'LH',
    bookings:[],

    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacose} ${flightNum}`)
        this.bookings.push({flight:`${this.iatacose}${flightNum}`,name})
    },
 }
 lufthansa.book(239,'Pawan Sapkota');
 lufthansa.book(333,'John Doe');
 console.log(lufthansa)

 
 const eurowings ={
    airline:'eurowings',
    iatacose:'EW',
    bookings:[],
 }
 
 const book =lufthansa.book;
//Doesnot work in this condition
//  book(23,'Sarah Fernandex') so, We have to apply call and apply methods.

book.call(eurowings,23,'Sarah Fernandex');
console.log(eurowings)
book.call(lufthansa,444,'Ricky haderson')
console.log(lufthansa)

const swiss={
    airline:'Swiss airline',
    iatacose:'SW',
    bookings:[]
}
book.call(swiss,555,'Marley Cooper')
console.log(swiss)

//Apply method
const Data =[678,'Harley Davidson']
book.apply(swiss,Data)
console.log(swiss)

//But we can still use call method which is new and easy
book.call(swiss,...Data)
console.log(swiss)


///Bind Method
const Eur23 = book.bind(eurowings)
Eur23(44,'Nelson Mans')
//OR we can do another way as well

const EUR55 = book.bind(eurowings,55)
EUR55('JONNAS KINGS')


// Closers

// On Local Scope  count remains constant
function count(){
    let count1=0;
     return count1++;    
}
console.log(count()) //Output:0
console.log(count()) //Output:0
console.log(count()) //Output:0


//On Global Scope couter increase
let count2 =0;
function counter(){    
    return count2++;
}
console.log(counter()) //Output:0
console.log(counter()) //Output:1
console.log(counter()) //Output:2


//Closure

const booking = function(){
    let count =0;

    return function(){
        count++;
        console.log(`${count} count`)
    }
}
const execution =booking();
execution();
execution();
execution();
