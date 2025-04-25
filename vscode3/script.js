let a = +prompt("Введите число a:");
let b = +prompt("Введите число b:");

function calculator(a, b) {

    let sum = a + b;
    alert(`сумма: ${sum} `)
    
    let difference = a - b;
    alert(`Разница: ${difference}`);

    let product = a * b;
    alert (`Прозведение : ${product}`);

    if (b !== 0) {
        let quotient = a / b; 
        alert (`Частноe: ${quotient}`);
     } else { 
alert("Ошибка: деление на ноль! ");
    }

    let power = a ** b; 
    alert(`Возведение в степень: ${power}`);

    let remainder = a % b ;
    alert(`Остаток от деления: ${remainder}`);
}
calculator(a , b);





 









