import capitalize from "./index";

// test("capitalize function", () => {
// 	const str = capitalize("serttt");
// 	expect(str).toMatch(/^[A-Z]/);
// });
// test("capitalize function", () => {
// 	const str = capitalize("3serttt");
// 	expect(str).toMatch(/^[A-Z]/);
// });
// test("capitalize function", () => {
// 	const str = capitalize(" serttt");
// 	expect(str).toMatch(/^[A-Z]/);
// });
test("capitalize function", () => {
	expect(capitalize("str")).toBe("Str");
});
test("capitalize function", () => {
	expect(capitalize(" str")).toBe("Write a valid string.");
});
test("capitalize function", () => {
	expect(capitalize("3str")).toBe("Write a valid string.");
});
