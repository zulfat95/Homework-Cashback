const votes = [1, 10, 7]; // массив с тремя элементами
    
let promoters = 0;
let detractors = 0;
let neutrals = 0;

if (votes[0] >= 9) { // votes[0] - доступ к первому элементу
    promoters++;
} else if (votes[0] >= 7) { // проверяем это, если первое не сработало
    neutrals++;
} else { // если ни одно из верхних условий сработало
    detractors++;
}

if (votes[1] >= 9) { // Ctrl + R - замена
    promoters++;
} else if (votes[1] >= 7) { // проверяем это, если первое не сработало
    neutrals++;
} else { // если ни одно из верхних условий сработало
    detractors++;
}

if (votes[2] >= 9) {
    promoters++;
} else if (votes[2] >= 7) { // проверяем это, если первое не сработало
    neutrals++;
} else { // если ни одно из верхних условий сработало
    detractors++;
}

console.log(promoters);
console.log(neutrals);
console.log(detractors);

const nps = (promoters - detractors) / votes.length * 100; // .length - длина массива (количество элементов в нём)
console.log(votes.length);
console.log(nps);
