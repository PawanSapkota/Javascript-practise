console.log('Practise 14');



  function Person(name,age){
    this.firstName = name,
    this.ages = age    
}

 const pawan =new Person('pawan',2000)
 const rohan = new Person('rohan',2001)
console.log(pawan)
console.log(rohan)

console.log(Person.prototype)

Person.prototype.calcAge = function(){
    console.log(2022 - this.ages)
}
pawan.calcAge();

console.log(pawan.__proto__);

console.log(pawan.__proto__ === Person.prototype);

// Object.PrototypeOfLinkedObjects
Person.prototype.species = "Homo Sapiens";
console.log(pawan.species,rohan.species)

//Objects.Prototypes(top of protoypechain)
console.log(pawan.__proto__);
console.log(pawan.__proto__.__proto__);
console.log(pawan.__proto__.__proto__.__proto__);   //null


/// Class

class Person1{
    constructor(fullName,birthday){
        this.fullName = fullName;
        this.birthday = birthday;
    }
    // Methods will be added in .prototypeproperty
    greeting(){
        console.log(`Hi,${this.fullName}`)
    }

    get age(){
        return 2037 - this.birthday;
    }

    // Set a property that already exists.
     set fullName(name){
        console.log(name)
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not fullName.`)

    }
    get fullName(){
        return this._fullName;
    }
}

const per = new Person1('Pawan Sapkota',2000);
console.log(per);

const walter = new Person1('Walter Davie', 1997);

per.greeting();
console.log(per.age);
console.log(per.fullName);

console.log(per.__proto__ === Person1.prototype);



// Getter and Setter

const account ={
    owner:"John",
    movements :[300,400,500,600,700],

    get latest(){
        return this.movements.slice(-1).pop()
    }

   
}
console.log(account.latest)


const PersonPrototye ={
    calcAge(){
       console.log( 2037 - this.birthday);
    },

    fullName(){
        console.log(this.name)
    },
}
const steven = Object.create(PersonPrototye);
console.log(steven);
steven.birthday = 2003;
steven.name = 'steven';

steven.calcAge();
steven.fullName();


