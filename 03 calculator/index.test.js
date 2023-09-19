import { calculator } from ".";

test("add", () => {
	expect(calculator.add(5, 4)).toBe(9);
});

test("subtract", () => {
	expect(calculator.subtract(5, 4)).toBe(1);
});

test("multiply", () => {
	expect(calculator.multiply(5, 4)).toBe(20);
});

test("division", () => {
	expect(calculator.divide(16, 4)).toBe(4);
});
