import { sum } from "./index";

test("ma fonction sum", () => {
	let result = sum(7, 3);
	expect(result).toBe(10);
});
