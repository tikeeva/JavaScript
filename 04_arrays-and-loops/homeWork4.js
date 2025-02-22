// Задание 1:
// Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными,
// а также может быть n > m или n < m. Выведите результат с помощью console.log.

let n = 0;
let m = 100;
let count = 100;
// кол-во цифр, которые могут быть сгенерированы
let range = Math.abs(m - n);
// Левая граница
let min = Math.min(n, m);
// генератор массивов
let array = [];

for (let i = 1; i <= count;  i++) {
    array.push(min + Math.round(Math.random() * range));
}
//console.log(array);

// Задание 2:
// С помощью цикла создать перевёрнутый вариант произвольной строки. 
// Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП».

let str = '';
let rts = '';
for (let i in str) {
    rts = rts + str[str.length - 1 - i];
}
console.log(rts);

// Задание 3:
// Танк едет по дороге, на которой могут быть противотанковые мины. Дорога должна быть представлена в виде массива roadMines
// из 10 boolean-элементов. Если элемент равен true, то это мина. Движение танка должно быть представлено как цикл,
// в котором одна итерация — продвижение танка на следующий участок дороги (следующий элемент массива). При передвижении
// выводить в консоль сообщение «танк переместился на ${position}», где position — номер ячейки + 1. Если танк попал на мину,
// то нужно вывести сообщение «танк повреждён», если это 1-й взрыв, и «танк уничтожен», если это 2-й взрыв. После 2-го взрыва
// танк считается уничтоженным и прекращает движение.

let roadMines = [true, false, false, false, false, false, false, false, false, true];
let count = 0;

console.log(flag ? `Имя ${name} ${surname} осталось без изменений`
: `Имя ${name} ${surname} было преобразовано ${nameNew} ${surnameNew}`);

for (let road in roadMines) {
    console.log(`Танк переместился на ${parseInt(road) + 1}`);
    if (roadMines[road]) {
      count ++
      if (count == 1) {
        console.log('Tанк повреждён');
      } else {
        break
      }
    }
  }
console.log(count < 2 ? 'Танк уехал' : 'Tанк уничтожен');

// Задание 4:
// Сгенерировать массив чисел 1–31 включительно (числа месяца). Вывести с помощью console.log для каждого из чисел строку
// ${число} января, ${день недели}. День недели 1 января должен задаваться с помощью переменной, то есть программа должна
// корректно работать для любого дня недели, с которого начинается месяц. Подсказка 1: для дней недели можно создать массив
// с названиями дней, чтобы обращаться к нему по индексу. Подсказка 2: индекс дня недели можно вычислить с помощью операции остатка от деления.

let numbers = [];
let dayOfWeek= ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
let start = "вторник";
let corrInd;

for (let i = 1; i <= 31; i++) {
  numbers.push(i);
}

for (let ind in dayOfWeek) {
  if (dayOfWeek[ind] == start) {
    corrInd = parseInt(ind);
    break
  }
}

for (i = 0; i < numbers.length; i++) {
  console.log(`${numbers[i]} января, ${dayOfWeek[(i + corrInd) % 7]}`);
}