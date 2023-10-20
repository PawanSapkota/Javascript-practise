console.log('coding challenge 1 of 9');

const game ={
    team1:'Bayern Munich',
    team2:'Borrussia Dortmund',
    players:[
        ['Naeuver',
        'Povard',
        'Martinez',
        'Alaba',
        'Davies',
        'kimmich',
        'Goretza',
        'Coman',
        'Muller',
        'Gunerby',
        'Lewandoski'    
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Alanji',
        'Hikimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze'
    ],
],
score:'4:0',
scored:['Lewandoski','Gunerby','Lewandoski','Hummels'],
date:'Nov 9th,2037',
odds:{
    team1:1.33,
    x:3.65,
    team2:6.5
},

};

const [players1,players2]= game.players;
console.log(players1,players2);

const[gk,...fieldPlayer]=players1;
console.log(gk,fieldPlayer)



const allPlayers=[...players1,...players2]
console.log(allPlayers)

const players1Final =[players1,'Thiago','Cutinsic','Perisic']
console.log(players1Final);

const{odds:{team1,x:draw,team2},}=game;
console.log(team1,draw,team2)

const printGoals =function(...players){
    console.log(`${players.length} goals were scores`)
}
printGoals(...game.scored)

team1<team2 && console.log('Team1 is likely to win')
team1>team2 && console.log('Team2 is likely to win')

