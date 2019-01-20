export function calculateCashback(purchases) {

    let result = (purchases[0] * 0.01) + (purchases[1] * 0.03) + (purchases[2] * 0.3);
    let limit = 3000;
    if (result <= limit) {
        return result;
    } else {
        return limit;
    }
    return result;

}