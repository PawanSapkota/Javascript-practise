console.log('codingchallenge14');

 function Car(make,speed){
    this.speed = speed;
    this.make = make;
 }

 Car.prototype.accelerate=function(){
     (this.speed += 10);
    console.log(`${this.make} is moving at ${this.speed}`)
 }
 Car.prototype.brake = function(){
     (this.speed -= 5);
     console.log(`${this.make} is moving at ${this.speed}`)
 }
 const bmw = new Car('BMW',120);
 console.log(bmw);
 const mercedes = new Car('Mercedes',100);
 console.log(mercedes);

 bmw.accelerate();
 bmw.accelerate();
 bmw.brake()
 bmw.accelerate();
 bmw.accelerate();
 mercedes.brake();
 mercedes.brake();
 bmw.accelerate();
 mercedes.brake();


 /// Challenge 2:

 class Car1{
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }
    brake(){
        (this.speed -= 5);
     console.log(`${this.name} is moving at ${this.speed}`)
    }
    
    accelerate(){
        (this.speed += 10);
    console.log(`${this.name} is moving at ${this.speed}`)
        
    }
    set speedUs(speeds){
        this.speed = speeds * 1.6;
    }
    get speedUs(){
        return(`${this.speed/1.6}`)
    }
     
 }

 const ford = new Car1('ford',120);
 console.log(ford)
 ford.accelerate();
 ford.brake(); 
 ford.speedUs =50;
 console.log(ford)
// console.log(ford.speedUs);