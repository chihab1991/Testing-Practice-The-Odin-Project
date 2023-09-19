export default function reverseString(str) {
	let reverseStr = "";
	for (let i = 1; i <= str.length; i++) {
		reverseStr += str[str.length - i];
	}
	return reverseStr;
}
