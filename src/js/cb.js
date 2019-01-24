export function calculateCashback(min, big, extra) {
    let minPurchase = min * 0.01;
    let bigPurchase = big * 0.03;
    let extraPurchase = extra * 0.3;
    let result = minPurchase + bigPurchase + extraPurchase;
    const limit = 3000;
    if (result > limit) {
        return limit;
    }
    return result.toFixed(2);
}