let count = 10;
// let after = count++; // 1. after = 10. 2. count = count + 1
// console.log(after); // 10
// console.log(count); // 11
// // count++; на отдельной строке без присваиваний и никаких проблем
//
// after = ++count; // 1. count = count + 1; 2. after = count
// console.log(12);
// console.log(12);

// лучше писать так
count++;
let after = count;

let purchasesAmount = 2000; // _ для разделения разрядов
if (purchasesAmount < 1000) { // если expr - true, то выполняем блок, если false - то не выполняем
    console.log('Вам полагается кэшбек 5%')
}