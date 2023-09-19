import reverseString from "./index";

test("reverse string", () => {
	expect(reverseString("love")).toBe("evol");
});

test("reverse string", () => {
	expect(reverseString("3mpr")).toBe("rpm3");
});

test("reverse string", () => {
	expect(reverseString("wassupp!!")).toBe("!!ppussaw");
});
