//start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name ='Maya';
let name2 = name;
console.log(name, name2);
name ='Lily';
console.log(name, name2);

//Let's say we have an array
const players = ['john', 'Robert', 'Liz', 'Ben'];

//and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Tim';

//So, how do we fix this? we take a copy instead!
const team2 = players.slice();

//or create a new array and concat the old one in
const team3 = [].concat(players);

//or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Nice';
console.log(team4);

//with objects
const person ={
    name:'Lily Ray',
    age:80
};

//and think we make a copy:
const captain = person;
captain.number =99;

//how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 });
console/log(cap2);

//Things to note - this is only 1 level deep - both for Arrays and Objects. Lodash has a cloneDeep method, but you should think twice before using it.
const arzu = {
 name: 'Arzu',
 age: 100,
 social: {
  twitter: '@arzuguneycaner',
 }
};

console.clear();
console.log(arzu);

const dev = Object.assign({}, arzu);
const dev2 = JSON.parse(JSON.stringify(arzu));