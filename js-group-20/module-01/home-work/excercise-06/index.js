let input;
let total = 0;
do {
  input = prompt('Введите число:');
  console.log(Number(input));
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }
  console.log(input);
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
