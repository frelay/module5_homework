// Задание 1
const question = +prompt("Введите число:");

if (!isNaN(question) && typeof question === "number" ) {
	if (question % 2 === 0) {
		console.log(`Число ${question} чётное`);
	} else {
		console.log(`Число ${question} нечётное`);
	}
} else {
	console.log("Упс, кажется, вы ошиблись");
}
