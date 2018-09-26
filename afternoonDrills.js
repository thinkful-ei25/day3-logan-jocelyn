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