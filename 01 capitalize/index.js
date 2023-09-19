export default function capitalize(str) {
	if (str[0].toUpperCase() !== str[0].toLowerCase())
		return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
	return "Write a valid string.";
}
