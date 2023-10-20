// Functions coding challenge

const calcAvg = (a,b,c)=>(a+b+c)/3;
console.log(calcAvg(3,4,5));

const scoreDolphins =calcAvg(44,23,71);
const scoreKoalas = calcAvg(65,54,49);
console.log(scoreDolphins,scoreKoalas)


const checkWinner =function(avgDolphins,avgKoalas){
if (avgDolphins >= 2*avgKoalas){
    console.log(`Dolphins wins ${avgDolphins} vs. ${avgKoalas}.`)
}
else if(avgKoalas >= 2*avgDolphins){
    console.log(`Koalas wins ${avgKoalas} vs. ${avgDolphins}.`)
}
else{
    console.log("None wins")
}
}
checkWinner(scoreDolphins,scoreKoalas);
checkWinner(50,100)



/// Array : 2
const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill* 0.5 : bill* 0.2;
}

const bills =[126,555,44];
const tips =[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const totals =[bills[0] + tips[0], bills[1] + tips[1],bills[2] +tips[0]];
console.log( bills,tips,totals);

// object :3

const mark ={
    fullName :"Mark Miller",
    mass:78,
    height :1.69,
    calcBMI: function(){
        this.bmi= this.mass / this.height**2;
        return this.bmi;      
    }
}
const john ={
    fullName :"John Smith",
    mass:92,
    height :1.92,
    calcBMI1: function(){
        this.bmi = this.mass / this.height **2;
        return this.bmi;
            
    }
}
console.log(mark.calcBMI());
console.log(john.calcBMI1());

// console.log(mark.bmi,john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName} has ${mark.bmi} BMI.`)
}
else if(john.bmi > mark.bmi){
    console.log(`${john.fullName} has ${john.bmi} BMI.`)    
}
else{
    console.log('None has BMI.')
}

/// challenge 4

const bills1 =[22,295,176,440,37,105,10,1100,56,42];
const tips1 = [];
const totals1 =[];

for(i=0;i<bills1.length;i++){
   const tip =calcTip(bills1[i]);
   console.log(tip)
//    tips1.push(tip);
//    totals1.push(tip + bills1[i])
}
// console.log( bills1,tips1,totals1)


let ages;
console.log(ages);




