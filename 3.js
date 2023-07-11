const dog = {
  _name: 'Rex',
  getName: function () {
    return this._name;
  }
};

const getNameCopy = dog.getName;

console.log(dog.getName());
console.log(getNameCopy());

// Copy eseten a this a global objektum lesz, amin a _name undefined 
// Meg lehet kerdezni hogy oldana meg:
//   const getNameCopy = dog.getName.bind(dog);