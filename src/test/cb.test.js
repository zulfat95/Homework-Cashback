import {calculateCashback} from "../js/cb.js";
test('It should calculate cashback', () => {
    const result = calculateCashback([3000, 3000, 2300]);
    expect(result).toBe(810);
});
