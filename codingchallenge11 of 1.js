console.log('This is coding challenge 11');

// Challenge 1:
const checkDogs = function(julia,kate){
    const juliaCorrected = julia.slice();
    juliaCorrected.splice(0,1);
    juliaCorrected.splice(-2);
    console.log(juliaCorrected);

    const dogs = juliaCorrected.concat(kate)
    console.log(dogs);

 for(const dog of dogs){
    const i=0;
    if(dog >= 3){
        console.log(`Dog Number ${i+1} is adult and age is ${dog}`)
    }
    else(
        console.log(`Dog Number ${i+1} is puppy and age is ${dog}`)
    )
 }

}
checkDogs([3,5,2,12,7],[4,1,15,8,3]);

//Challenge 2:

calcAverageHumanAge=(ages)=>{
   const humanAges = ages.map(age => age >=2 ? 2*age: 16+age*4)
   console.log(humanAges)
    const adults= humanAges.filter(age=> age > 18);
    console.log(adults)

    const average = adults.reduce((acc,age)=>{
     return   acc+age;
    } ,0)/adults.length;
    return average;

}
const avg1=calcAverageHumanAge([5,2,4,1,15,8,3]);
const avg2 = calcAverageHumanAge([16,6,10,5,6,1,4])
console.log(avg1,avg2)