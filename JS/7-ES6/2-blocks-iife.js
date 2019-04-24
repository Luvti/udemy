//Blocks and IIFEs

//блок - ES6
{
    const a = 1;
    let b = 2;
    var c = 3;      // var - не block scope, а function scope - по этому доступно за пределами блока
}
// console.log(a+b);   // ошибка - переменные недоступны за пределами блока
console.log(c);        // доступна за пределами блока так как у var доуступен в рамках function scope

//IIFE in ES5
(function(){
    var c =2;
})();
// console.log(c); // ошибка - переменные недоступны за пределами 