import {calculateCashback} from "../js/cb.js";
test('It should calculate under limit', () => {
    const result = calculateCashback(3000, 3000, 2300);
    expect(+result).toBe(810.00);
});
test('It should calculate over limit', () => {
    const result = calculateCashback(7000,7000, 17000);
    expect(result).toBe(3000);
});