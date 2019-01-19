// var value; - всплыло с undefined
console.log(value);

var value = 10;
{
    var value = 20;
    console.log(value);
}

console.log(value);