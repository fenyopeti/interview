function print() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  Promise
    .resolve()
    .then(() => {
      console.log("3");
    })
    .then(() => {
      console.log("4");
    });

  console.log("5");
}

console.log("6");
print();
console.log("7");

// Szinkron hivasok elso korben
// Promise .then -ek masodjara (Microtask queue)
// setTimeout callback-je utoljara (Task queue)
// itt meselhet ha tud az event looprol, hogyan mukodik node-ban az aszinkronitas
