console.log('practise2');

// Functions
function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice =`Juice with ${apples} apples and ${oranges} oranges.`
    return juice;    
   }
 const appleJuice = fruitProcessor(2,0);
 const appleOrangeJuice = fruitProcessor(3,5);
 console.log(appleJuice,appleOrangeJuice);


 /// Funtions declarations
 function age(birthyear){
    return 2032 - birthyear;
 }
 const totalAge =age(1959)
 console.log(totalAge); 


 // Function expressions
 const calcAge = function(birthyear1){
    return 2037 - birthyear1;
 }
 const totalAge1= calcAge(1968);
 console.log(totalAge1);


 //Arrow Funtions
 const subtraction =(a,b)=>{
    return a - b;
 }
 const result = subtraction(15,10);
 console.log(result);



 ///Calling a function from one another

 function cuttingFruits(fruits){
    return fruits * 3;
 }

 const processingFruits =function(apples,oranges){
    const appleJuices =cuttingFruits(apples);
    const orangeJuices = cuttingFruits(oranges);
     return `Juice with ${appleJuices} apples and ${orangeJuices} oranges`
 }
 const mixture1 =processingFruits(4,8);
 console.log(mixture1);


 //Arrays Method

 // Adding
 let friends =['Joe','Gemmy','Penny','Rob','Harley'];
 friends.push('Ram');//( Adding from last)
 friends.push('Ram');
 console.log(friends);

 friends.unshift('Shyam'); //(Adding from first)
 console.log(friends);

 // Removing
 friends.pop()
 friends.pop()//(Removing from last)
 console.log(friends);

 friends.shift();
 console.log(friends);

 console.log(friends.includes('Rob'));//Boolean

 friends.includes('Ram')?console.log('You have friend Ram'):console.log('no')
 friends.includes('Rob')?console.log('You have friend Rob'):console.log('no')


 // Objects

 const jonas ={
   firstName:'Jonas',
   lastName:'Schemen',
   birthday:1991,
   job:'Programmer',
   friends:['Ram','Shyam','Thomas'],
   hasDriverLiscense:true,

   // calcAge: function(birthday){
   //    return 2022- birthday;
   // }
   calcAge:function(){
      return 2022 - this.birthday;
   }   
}
console.log(jonas.calcAge());



//For loop

for(let num =1; num <= 10; num++){
   console.log(`Number is increasing ${num}`);
}

//Looping arrays

const arrayJonas1 =[
   'Jonas',
   'Schemedeton',
   2022-1971,
   'teacher',
   true,
   ['Michael','Ronny']
]

const types =[];

console.log(arrayJonas1.length)

for(let i=0;i<arrayJonas1.length;i++){
   console.log(arrayJonas1[i])

   types[i] = typeof(arrayJonas1[i]);
   types.push(arrayJonas1[i]);
}
console.log(types);

const years = [1947,1958,1932,1964];
const ages=[];

for(let i=0;i<years.length;i++){
   ages.push(2023- years[i])
}
console.log(ages);



