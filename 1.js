const dog = { says: 'Wau' };
const cat = dog;

dog.says = 'Miauw';

console.log(cat.says);

// Referencia szerint van ertek adva.
// Javitas: deep copy, hogyan csinalna
