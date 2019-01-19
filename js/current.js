{
    let inner = 10; // имя живёт внутри блока (с 1 до 3 строку)
}

// console.log(inner);

let variable = 100;
{ // "внутреннее имя"
    console.log(variable); // TDZ - Temporarily Dead Zone
    let variable = 10;
    console.log(variable);
/* внутреннее имя */ }
console.log(variable);

let count = 10;
// прошло 10 строк кода
count = 20;

const size = 20; // всего один раз можно связать со значением
// size = 1; и связь дальше менять нельзя

// const sample; так нельзя
// sample = 20;
