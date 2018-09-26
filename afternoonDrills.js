//object initializers and methods 
'use strict'; 

const loaf = {
  flour: 300,
  water: 210, 
  hydration:function(){
    return ((loaf.water/loaf.flour)*100);
  },
};


console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());

//Iterate over an object's properties
const foobar = {
  foo: 'foo',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spam'
};

for (let property in foobar){
  console.log(`${property}: ${foobar[property]}`);
}

//arrays in objects

const hobbitDiet = {
  meals:['breakfast', 'second breakfast', 'elevenses',
    'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbitDiet.meals[3]);

//arrays of objects

const wizard = {name:'Gandalf', jobTitle:'White wizard'};
const teacher = {name:'John', jobTitle:'Dean'};
const animal = {name:'Yogi', jobTitle:'Bear'};
const people = [wizard, teacher, animal];

people.forEach(person =>{
  console.log(`name: ${person.name}: ${person.jobTitle}`);
});


//properties that aren't there (?)

wizard.boss = 'someguy';
teacher.boss = 'someguy';

people.forEach(person => {
  if (!person.boss){
    console.log(`${person.jobTitle} ${person.name}
     doesn't report to anybody`);
  }else 
    console.log(`${person.jobTitle} ${person.name}
    reports to ${person.boss}.`);
});

//cracking the code
const message = 'craft block argon meter bells brown croon droop';
const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

function decode(word){
  if (cipher[word[0]]){
    return word[cipher[word[0]]];
  } else {
    return ' ';
  }
}
function decodeWords(message){
  let words = message.split(' ');
  words.forEach(word => decode(word));
  return words.join;
}

console.log(decodeWords(message));


