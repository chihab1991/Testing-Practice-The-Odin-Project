export default function caesarCipher(str, shift) {
	let outStr = "";
	str.split("").forEach((element) => {
		if (element.toLowerCase() === element) {
			outStr += shiftLowerCase(element, shift);
		} else if (element.toUpperCase() === element) {
			outStr += shiftUpperCase(element, shift);
		}
	});
	return outStr;
}

function shiftLowerCase(char, shift) {
	const lowerChars = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	if (lowerChars.includes(char)) {
		let index = (lowerChars.indexOf(char) + shift) % 26;
		return lowerChars[index];
	}
	return char;
}
function shiftUpperCase(char, shift) {
	const upperChars = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	if (upperChars.includes(char)) {
		return upperChars[(upperChars.indexOf(char) + shift) % 26];
	}
	return char;
}
