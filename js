   function countSheeps(list) {
  let sheepCount = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === true) {
      sheepCount++;
    }
  }
  if (sheepCount === 0) {
    return "UPS!!! Wolfs eaten Sheeps";
  }
  return `There are ${sheepCount} sheep in total`;
}
// Casos de prueba
const list1 = [
  true, true, true, false, true, true, true, true,
  true, false, true, false, true, false, false, true,
  true, true, true, true, false, false, true, true
];
const list2 = [false, false, false];
console.log(countSheeps(list1));
// There are 17 sheep in total
console.log(countSheeps(list2));
// UPS!!! Wolfs eaten Sheeps
 
