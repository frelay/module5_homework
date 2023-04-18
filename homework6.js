// Задание 6
const myArr = [1, 1, 1, 325, 1];
const firstItem = myArr[0];
let res = true;

for (let i = 0; i < myArr.length; i++) {
	if(myArr[i] !== firstItem) {
    	res = false;
    }   
}

console.log(res);
