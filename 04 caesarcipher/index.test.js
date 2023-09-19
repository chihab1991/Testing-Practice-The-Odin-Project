import caesarCipher from ".";

test("caesar cipher test 1", () => {
	expect(caesarCipher("abc", 1)).toBe("bcd");
});
test("caesar cipher test 2", () => {
	expect(caesarCipher("ABC", 13)).toBe("NOP");
});
test("caesar cipher test 3", () => {
	expect(caesarCipher("Abc.!", 13)).toBe("Nop.!");
});
test("caesar cipher test 4", () => {
	expect(caesarCipher("abC", 5)).toBe("fgH");
});
