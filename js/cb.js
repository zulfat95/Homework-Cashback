export function calculateCashback(purchases) {

    let result = (purchases[0] * 0.01) + (purchases[1] * 0.03) + (purchases[2] * 0.3);
    const limit = 3000;
    if (result > limit) {
        return limit;
    }
    return result;

}