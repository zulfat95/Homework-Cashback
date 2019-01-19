const votes = [10, 10, 10, 7]; // массив с тремя элементами
    
let promoters = 0;
let detractors = 0;
let neutrals = 0;

// iter + tab
for (const vote of votes) { // const vote уходит внутрь блока
    // для каждого vote из votes
    if (vote >= 9) { // votes[0] - доступ к первому элементу
        promoters++;
    } else if (vote >= 7) { // проверяем это, если первое не сработало
        neutrals++;
    } else { // если ни одно из верхних условий сработало
        detractors++;
    }
}

console.log(promoters);
console.log(neutrals);
console.log(detractors);

const nps = (promoters - detractors) / votes.length * 100; // .length - длина массива (количество элементов в нём)
console.log(nps);
