import { sum } from "../sum";

test("Sum function should calculate the sum of function", () => {
  const result = sum(1, 1);

  // Assertion
  expect(result).toBe(2);
});
