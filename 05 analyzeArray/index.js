export default function analyzeArray(arr) {
	let average,
		total = 0,
		min = null,
		max = 0,
		length = 0;
	arr.forEach((element) => {
		length++;
		total += element;
		min = min === null ? element : min < element ? min : element;
		max = max > element ? max : element;
	});
	average = total / length;
	return {
		average,
		min,
		max,
		length,
	};
}
