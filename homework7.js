// Задание 7
const newArr = [1, 2, null, undefined, 8, 3, 'hello', true, 16, 0, false];
const evenArr = [];
const oddArr = [];
const othersArr = [];

for (let i = 0; i < newArr.length; i++) {
  if (typeof newArr[i] === 'number' && newArr[i] != 0 && !isNaN(newArr[i])) {
    if (newArr[i] % 2 == 0) {
      evenArr.push(newArr[i]);
    } else {
      oddArr.push(newArr[i]);
    }
  } else {
    othersArr.push(newArr[i]);
  }    
}
