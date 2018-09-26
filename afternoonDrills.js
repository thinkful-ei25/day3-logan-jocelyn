// //object initializers and methods 
'use strict'; 

// const loaf = {
//   flour: 300,
//   water: 210, 
//   hydration:function(){
//     return ((loaf.water/loaf.flour)*100);
//   },
// };


// console.log(loaf.flour);
// console.log(loaf.water);
// console.log(loaf.hydration());

// //Iterate over an object's properties
// const foobar = {
//   foo: 'foo',
//   bar: 'bar',
//   fum: 'fum',
//   quux: 'quux',
//   spam: 'spam'
// };

// for (let property in foobar){
//   console.log(`${property}: ${foobar[property]}`);
// }

// //arrays in objects

// const hobbitDiet = {
//   meals:['breakfast', 'second breakfast', 'elevenses',
//     'lunch', 'afternoon tea', 'dinner', 'supper']
// };

// console.log(hobbitDiet.meals[3]);

// //arrays of objects

// const wizard = {name:'Gandalf', jobTitle:'White wizard'};
// const teacher = {name:'John', jobTitle:'Dean'};
// const animal = {name:'Yogi', jobTitle:'Bear'};
// const people = [wizard, teacher, animal];

// people.forEach(person =>{
//   console.log(`name: ${person.name}: ${person.jobTitle}`);
// });


// //properties that aren't there (?)

// wizard.boss = 'someguy';
// teacher.boss = 'someguy';

// people.forEach(person => {
//   if (!person.boss){
//     console.log(`${person.jobTitle} ${person.name}
//      doesn't report to anybody`);
//   }else 
//     console.log(`${person.jobTitle} ${person.name}
//     reports to ${person.boss}.`);
// });

// //cracking the code
// let message = 'craft block argon meter bells brown croon droop';

// function decode (someWord){
//   const cipher = {
//     a: 2,
//     b: 3,
//     c: 4,
//     d: 5,
//   };
//   const initial = someWord[0];
//   if (initial in cipher){
//     const index = cipher[initial];
//     return someWord[index-1];
//   } else 
//     return ' ';
// }

// function decodeWords(string){
//   let divided = string.split(' ');
 
//   const results = divided.map(word => 
//     decode(word)
//   ); const final = results.join('');
//   return final;
// } 

// // console.log(decodeWords(message));
// //Factory Functions with LOTR
function createCharacter(name, nickname, race, origin, attack, defense, weapon){
  return{
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function(){
      return `${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`;  
    },
    evaluateFight: function(opponent){
      let damageDealt;
      if (this.attack > opponent.defense){
        damageDealt = this.attack - opponent.defense;
      } else {
        damageDealt = 0;
      }
      let damageRec;
      if (opponent.attack > this.defense){
        damageRec = opponent.attack - this.defense;
      } else {
        damageRec = 0;
      }
      let fightMessage = `Your opponent takes ${damageDealt} damage and you receive ${damageRec} damage`;
      return fightMessage;
    }
  };
}

const characters = [
  createCharacter('Gandalf the White','gandalf','Wizard','Middle Earth',10,6,'wizard staff'),
  createCharacter('Bilbo Baggins','bilbo','Hobbit','The Shire',2,1,'the Ring'),
  createCharacter('Frodo Baggins','frodo','Hobbit','The Shire',3,2,'String and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn','aragorn','Man','Dunnedain',6,8,'Anduril'),
  createCharacter('Legolas','legolas','Elf','Woodland Realm',8,5,'Bow and Arrow')
];

characters.push(createCharacter('Arwen Undomiel','arwen','Half-Elf','Rivendell',5,5,'Hadhafang'));
console.log(characters.find(character => character.nickname === 'aragorn').describe());

const hobbits = characters.filter(character => character.race === 'Hobbit');
console.log(hobbits);

const attackOver5 = characters.filter(character => character.attack > 5);
console.log(attackOver5);