const first = 7;
const second = 7;
const third = 7;
const fourth = 10;

let promoters = 0;
let detractors = 0;
let neutrals = 0;

if (first >= 9) {
    promoters++;
} else if (first >= 7) { // проверяем это, если первое не сработало
    neutrals++;
} else { // если ни одно из верхних условий сработало
    detractors++;
}

if (second >= 9) {
    promoters++;
} else if (second >= 7) { // проверяем это, если первое не сработало
    neutrals++;
} else { // если ни одно из верхних условий сработало
    detractors++;
}

if (third >= 9) {
    promoters++;
} else if (third >= 7) { // проверяем это, если первое не сработало
    neutrals++;
} else { // если ни одно из верхних условий сработало
    detractors++;
}

if (fourth >= 9) {
    promoters++;
} else if (fourth >= 7) { // проверяем это, если первое не сработало
    neutrals++;
} else { // если ни одно из верхних условий сработало
    detractors++;
}

console.log(promoters);
console.log(neutrals);
console.log(detractors);

// 3 - magic numbers
const nps = (promoters - detractors) / 4 * 100;
console.log(nps);
