let input;
const numbers = [];
let total = 0;
while (true) {
    input = prompt('Введи число');

    if (input === null) {
        break;
    }

    input = Number(input);
    const notANamber = Number.isNaN(input);

    if (notANamber) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    numbers.push(input);
}
if (numbers.length > 0) {
    for (const number of numbers) {
        total += Number(number);
    }
    console.log(`Общая сумма чисел равна ${total}`);
}
