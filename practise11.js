console.log('Practise 11');

const movements =[23,58,333,675,-231,885,-452,993,869];

for(const movement of movements){
    if (movement > 0){
        console.log(`You deposited ${movement}`)
    }else{
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
}

console.log('----For Each----');

movements.forEach(function(movement){
    if(movement > 0 ){
        console.log(`You deposited ${movement}`)
    }else{
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
})

console.log('----Map----')

const euroToUsd =1.1;
const money=movements.map((mov)=>{
    return mov* euroToUsd;
})
console.log(money)

const array=[];
for(const mov of movements){
    const change=mov*euroToUsd;
    array.push(change);    
}
console.log(array)

//Filter Method
const deposit = movements.filter((mov)=>{
    return mov>0;
})
console.log(movements)
console.log(deposit)

// Reduce Method
const balance = movements.reduce((acc,cur,i,arr)=>{  //First value i.e acc =0 which is given
    console.log(`Iteration ${i+1}:${acc}`)
    return acc+cur;
},0)
console.log(balance)

let balance1=0;
for(let mov of movements){
      balance1+=mov;
}
console.log(balance1)

//Maximum value
const maxValue =movements.reduce((acc,mov)=>{
    if(acc > mov){
        return acc;
    }else{
        return mov;
    }
},movements[0])
console.log(maxValue)

// Find method
console.log('----Find Methd----');

const firstWithdrawal = movements.find(mov=>mov <0);
console.log(movements);
console.log(firstWithdrawal);

const account1={
    owner:'Jonas Schemedtan',
    movements:[200,450,-400,3000,-650,-130,70,1300],
    intrestRate:1.2,
    pin:1111
}
const account2={
    owner:'Jessica Davis',
    movements:[5000,3400,-150,-790,-3210,-1000,8500,-30],
    intrestRate:1.5,
    pin:2222
}
const account3={
    owner:'Steven Thomas Williams',
    movements:[200,-200,340,-300,-20,50,400,-460],
    intrestRate:0.7,
    pin:3333
}
const account4={
    owner:'Jonas Schemedtan',
    movements:[430,1000,700,50,90],
    intrestRate:1,
    pin:4444
}
const accounts =[account1,account2,account3,account4];

// If we have to search by name the it is easy to use Find Mehod:
 
const account = accounts.find(acc=>
     acc.owner === 'Jonas Schemedtan' 
)
console.log(accounts)
console.log(account)


console.log(movements)
console.log(movements.includes(-333))
console.log(movements.includes(333))

// For some method : we need the value above the any exact number than we can use this method => returns true and false .

const someMethod = movements.some(mov => mov > 200);
console.log(someMethod)

// every Method: it to get true all the condition should be true

const everyMethod = movements.every(mov=> mov > 0);
console.log(everyMethod);

const everyMethod1 = movements.every(mov=> mov > -453);
console.log(everyMethod1);

// Flat method
const arrays =[[1,2,3],[4,5,6],7,8,9];
console.log(arrays);
console.log(arrays.flat());

const arrayDeep = [[1,[89,98,97],3],[4,5,6],7,8,9];
console.log(arrayDeep.flat());


// Sorting Method

//For Strings
const owners =['Rony','Jack','Zadane','Suarej'];
console.log(owners);
console.log(owners.sort());

//For Numbers
console.log(movements);

//Ascending order
movements.sort((a,b)=>{
  if(a>b) return 1;
  if(b>a) return -1; 
} )
console.log(movements)

movements.sort((a,b)=> a-b)
 console.log(movements)
 //(a-b) indicates the number to make on ascending order

//Decending order
movements.sort((a,b)=>{
    if(a>b) return -1;
    if(b>a) return 1; 
  } )
  console.log(movements)
movements.sort((a,b)=> b-a)
 console.log(movements)


 function findMedianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    console.log(merged)
    const len = merged.length;
    const mid = Math.floor(len / 2);
    console.log(mid)
    if (len % 2 === 0) {
      console.log((merged[mid - 1] + merged[mid]) / 2);
    } else {
      console.log(merged[mid]);
    }
  }
  findMedianSortedArrays([1,2],[3,4])

  

  
