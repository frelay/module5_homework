// Задание 2
const x = 2;

switch (typeof x) {
	case "string":
		console.log("x - строка");	
	break;
	case "number":
		console.log("x - число");	
	break;
	case "boolean":
		console.log("x - булевый тип");	
	break;
	default:
		console.log("Тип x не определён");
}
