// Задание 8
const myMap = new Map();

myMap.set('name', 'Pavel');
myMap.set('surname', 'Makarov');
myMap.set('age', 36);
myMap.set('city', 'Perm');

for (let item of myMap) {  
  console.log(`Ключ - ${item[0]}, Значение - ${item[1]}`);
}
