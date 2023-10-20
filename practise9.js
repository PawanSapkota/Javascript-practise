console.log('practise9');

const restaurant ={
    name: 'Classic Italino',
    location:'Via Angelo Tavanti 23, Firenze,Italy',
    categories:['Italian','Pizzeria','Vegetarian','Organic'],
    staterMenu:['Focacia','Brushetta','Garlic Bread','Caprese Salad'],
    mainMenu:['Pizza','Pasta','Rosetto'],
    openingHours:{
        thu:{
            open:12,
            close:4
        },
        fri:{
            open :10,
            close:12
        },
        sat:{
            open:7,
            close:1
        },
        sun:{
            open:9,
            close:11
        }
    },

    order: function(staterIndex,mainIndex){
        return [this.staterMenu[staterIndex],this.mainMenu[mainIndex]]
    },

    orderDelivery: function({staterIndex,mainIndex,time,address}){
        console.log(staterIndex,mainIndex,time,address);
        console.log( [this.staterMenu[staterIndex],this.mainMenu[mainIndex],time,address])

    },

    orderPasta:function(inge1,inge2,inge3){
        console.log(`Here, is your delivery item with ${inge1},${inge2},${inge3}`)
    }
};

//** Destructuring Array */

const arr =[2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);

const [x,y,z] =arr;
console.log(a,b,c)

const [first,second]= restaurant.categories;
console.log(first,second);

let [First, ,Third]=restaurant.categories;
console.log(First,Third);

/// altering the value;
 [First,Third] = [Third,First];
console.log(First,Third);

// calling function on array destructuring
const [ing1,ing2]= restaurant.order(1,2);
console.log(ing1,ing2);

//Nested Destructuring
const nested =[3,4,[7,8]];
const [i,,[j,k]] = nested;
console.log(i,j,k);

// Putting default values
const [ p=1,q,r=1]=[,8,9];
console.log(p,q,r);


///* Destructuring Objects

const {name,categories,openingHours}=restaurant;
console.log(name,categories,openingHours)

// changing the name of variables
const {name: restaurantName, categories:categoriesName,openingHours:opens}=restaurant;
console.log(restaurantName,categoriesName,opens)

// Putting default values
const {menu=[],staterMenu:staters=[]} =restaurant;
console.log(menu,staters);

//nested
const{fri} =openingHours;
console.log(fri);

const {fri:{open,close}} =openingHours;
console.log(open,close);

const {fri:{open:o,close:po}} =openingHours;
console.log(o,po);

/// function destructuring // orderdelivery
restaurant.orderDelivery({
    time:22.30,
    address:'Butwal',
    staterIndex:2,
    mainIndex:1
})


///Spread Operator  { mainly this spread operator used to make an array and to call the function}

const arr1 =[1,2,3];
const badArray =[7,8,arr1[0],arr1[1],arr1[2]];
console.log(badArray);

const newArray = [7,8,...arr1];
console.log(newArray);

const newMenu =[...restaurant.mainMenu,'Gundruk'];
console.log(newMenu);

//Iterables : stings,array,sets,maps but Not Objects

const str ='Jonas';
const letters =[...str,'','s.']
console.log(letters)
console.log(...str);


// const ingredients =[
//     prompt(' let make a pasta'),
//     prompt('let make dosa'),
//     prompt('let make momo'),
// ]

// restaurant.orderPasta(...ingredients);


// Spread, because of right side of =
const ar =[2,3,[4,5]];

// Rest, because of right side of =
const [xo,yo,...others]=[3,4,9,8,0,6,5];
console.log(xo,yo,others);

const [pizza,,roseetto,...remaining]=[...restaurant.mainMenu,...restaurant.staterMenu] 
console.log(pizza,roseetto,remaining);

// sets

const orderSet=new Set([
    'Pasta',
    'Pasta',
    'Rosetto',
    'Rosetto',
    'Chicken'
])
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pasta'));
orderSet.add('Maize');
console.log(orderSet)

for(const order of orderSet ) console.log(order);


///Maps

const rest = new Map();
rest.set('name','Classic Italino');
rest.set(1,'Fernendeze Italy');
rest.set(2,'Rome Italy')

rest.set('categories',['Italian','Pizzeria','Vegetarian','Organic']).set('open',11).set('close',23)
.set(true,'we are open')
.set(false,'we are close')

console.log(categories)
console.log(rest.get('name'));
console.log(rest.has('categories'));
console.log(rest.get('categories'));
console.log(rest.get(true))

// Another method of using map

const questions =new Map([
    ['questions','What is the best programming language to learn'],
    [1,'C'],
    [2,'JS'],
    [3,'Python'],
    ['Correct',3],
    [true,'Correct'],
    [false,'Try Again']

])
console.log(questions);

// convert object into map
console.log(Object.entries(openingHours));
const hoursMap =new Map(Object.entries(openingHours))
console.log(hoursMap)


for(const [key,value] of questions){
    if (typeof key === 'number'){
        console.log(`Answer ${key}:${value}`)
    }
}
const answer =Number(prompt('Your answer'))
console.log(answer);

console.log(questions.get(questions.get('Correct')=== answer))



const abc ='pawan';
const def='sapkota';
console.log(abc,def)
const [xy,pq] =[def,abc];
console.log(xy,pq)


const value =['pawan','rohan','bikki'];
value.push('risab');
console.log(value)


const arrs = ['a', 'b', 'c'];

const index = arrs.indexOf('a'); // 👉️  0

if (index !== -1) {
  arrs[index] = 'z';
}

console.log(arrs); // 👉️ ['z', 'b', 'c']

for (let i=0; i<10;i += 2){
    console.log(i)
}

function lengthConverter(km){
    // return km*0.62
    console.log(km*0.62)
}
lengthConverter(3)


let positive =[9,8,7,6];
let negative =[-1,-2,-3,-4];

function add(){
   const addition =[positive[0]+negative[0],positive[1]+negative[1]];
   console.log(addition)
}
add()


function reverse(){
    const arrays =[1,2,3,4,5];
    arrays.reverse();
    console.log(arrays)
}
reverse();


var arr45 = [2, 5, 5.5, 3, 6.8, 0, -5];

const filtrate = (el) => {
  return Number.isInteger(el) && el > 0;
}

console.log(arr45.filter(filtrate));







