console.log("Hello World");

let JsName = prompt("Какое 'официальное' название JavaScript?", "");

if (JsName == "ECMAScript") {
  alert("Правильно!");
} else {
  alert("Не знаете? “ECMAScript”!");
}

let myNum = prompt("Enter your number:", "");

if (myNum > 0) {
  alert("1");
} else if (myNum < 0) {
  alert("-1");
} else {
  alert("0");
}

let result;

if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}

result = a + b < 4 ? (result = "Мало") : (result = "Много");

let message;

if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";

// Логические операторы

//Что выведет alert (ИЛИ)?
alert(null || 2 || undefined); // 2

alert(alert(1) || 2 || alert(3)); // сначала 1, return: undefined, затем 2, return: true

//Что выведет alert (И)?

alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // 1, return: undefined
alert(null || (2 && 3) || 4); // 3

//Проверка значения из диапазона
let age;

if (age >= 14 && age <= 90);

//Проверка значения вне диапазона
if (age < 14 || age > 90);
if (!(age >= 14 && age <= 90));

//Вопрос о "if"
if (-1 || 0) alert("first"); // "first", -1
if (-1 && 0) alert("second"); // -, 0
if (null || (-1 && 1)) alert("third"); // "third", 1

//Проверка логина
prompt("Ваш логин?", login);

if (login === "Админ") {
  prompt("Введите пароль:", pass);
  if ((pass = "Я главный")) {
    alert("Здравствуйте!");
  } else {
    alert("Не верный пароль");
  }
} else {
  alert("Я вас не знаю");
}

// ОБЬЕКТЫ
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}

// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let person in salaries) {
  sum += salaries[person];
}
alert(sum);

// Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

console.log(menu);

//Проверка логина
let login = prompt("Кто там?");

if (login === "админ") {
  let pass = prompt("Пароль?");

  if (pass === "главный") {
    alert("Здравствуйте!");
  } else if (pass === "" || pass === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (login === "" || login === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}

// Функции

// Обязателен ли "else"?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Родители разрешили?");
  }
}
// одинаково
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Родители разрешили?");
}

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function min(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  x = prompt("Ввведите число X:");
  n = prompt("Ввведите степень:");
  return x ** n;
}

// Циклы while и for

let i = 3;

while (i) {
  alert(i--);
} // 1

let i = 0;
while (++i < 5) alert(i); // 1, 2, 3, 4

let i = 0;
while (i++ < 5) alert(i); // 1, 2, 3, 4

for (let i = 0; i < 5; i++) alert(i); // 0,1,2,3,4

for (let i = 0; i < 5; ++i) alert(i); // 0,1,2,3,4

for (let i = 1; i <= 10; i++) {
  if (i % 2) continue;
  alert(i);
}

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

let num = prompt("Введите число большее 100:");
while (num <= 100) {
  num = prompt("Введите число большее 100:");
}

let num;

do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);

// ????????????????????
let n = 10;
first: for (let i = 2; i <= 10; i++) {
  let sum;
  for (let j = 2; j < i; j++) {
    sum = i % j;
    if (sum !== 0) if (sum === 0) continue first;
  }

  if (sum) console.log(i);
} // ????????????????????

// Конструкция "switch"

switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;

  default:
    alert("We hope that this page looks ok!");
}

if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

const number = +prompt("Введите число между 0 и 3", "");

if (number === 0) {
  alert("Вы ввели число 0");
}

if (number === 1) {
  alert("Вы ввели число 1");
}

if (number === 2 || number === 3) {
  alert("Вы ввели число 2, а может и 3");
}

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;
}

// СТРОКИ

// 1. Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

//ucFirst("вася") == "Вася";

function ucFirst(str) {
  let firstLetter = "";
  let restLetters = "";

  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      firstLetter = str[i].toUpperCase();
    } else {
      restLetters += str[i];
    }
  }
  str = firstLetter + restLetters;

  return str;
}

console.log(ucFirst("вася"));

// other solutions
ucFirst("вася") == "Вася";
// 1
let newStr = str[0].toUpperCase() + str.slice(1);

// 2
let newStr = str.charAt(0).toUpperCase() + str.slice(1);

// 3
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst("вася")); // Вася

// 2 Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

// Усечение строки
// важность: 5
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str, maxlength) {
  return str.substr(0, maxlength - 1) + "…";
}
console.log(truncate("Вот, чт", 20));
// друг
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

// Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:
//alert( extractCurrencyValue('$120') === 120 ); // true

console.log(extractCurrencyValue("$120"));
console.log(extractCurrencyValue("по 10000 руб."));

function extractCurrencyValue(str) {
  let numStr = "";

  for (let i = 0; i < str.length; i++) {
    if (String(+str[i]) === "NaN") continue;
    if (str[i] === " ") continue;

    numStr += str[i];
  }

  return numStr;
}

// #26.2 Вертикальная строка

// Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль. Чтобы получилось вот так:

// showVerticalMessage('марафон')

// М
// а
// р
// а
// ф
// о
// н

// Если строка начинается с буквы "м" - нужно вывести эту строку с первой заглавной буквой

// Если строка больше 10 символов - вывести только первые 10

console.log(showVerticalMessage("марафон"));
console.log(showVerticalMessage("громофон"));

function showVerticalMessage(str) {
  let firstLetter = "";
  let restStr = "";

  if (str.length > 10) str = str.slice(0, 10);

  for (let i = 0; i < str.length; i++) {
    if (i === 0 && str[i] === "м") {
      firstLetter = str[0].toUpperCase() + "\n";
      continue;
    }
    restStr += str[i] + "\n";
  }
  str = firstLetter + restStr;
  return str;
}

// Вывести простые числа

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.

let N = "";

first: for (let i = 2; i <= 50; i++) {
  second: for (let j = 2; j < i; j++) {
    if (i % j === 0) continue first;
  }
  N += i + ", ";
}
console.log(N);

// Сумма пользовательских чисел
// важность: 5
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// Запустить демо

// P.S. Есть «подводный камень» при работе с типами.

const num1 = prompt("Введите числа:");
const num2 = prompt("Введите числа:");

if (isFinite(num1) && isFinite(num2)) {
  alert(+num1 + +num2);
}

// Ввод числового значения
// важность: 5
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
  let num;

  do {
    num = prompt("Введите числовое значение:");
    if (num === null || num === "") return null;
  } while (isNaN(num));

  return +num;
}

readNumber();

// Операции с массивами

let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[styles.length % 2 === 0 ? styles.length / 2 : (styles.length - 1) / 2] =
  "Классика";

console.log(styles.shift());

styles.unshift("Рэп", "Регги");

console.log(styles);

// Сумма введённых чисел
// важность: 4
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

const arr = [];

function sumInput() {
  while (true) {
    let val = prompt("Введите значение:");
    if (isNaN(val) || val === "" || val === null || val === " ") break;
    arr.push(val);
    console.log(arr);
  }
  let sum = 0;
  for (el of arr) {
    sum += +el;
  }
  return sum;
}
sumInput();

// Переведите текст вида border-left-width в borderLeftWidth

function camelize(str) {
  let arr = str.split("");

  arr.map((item, index) => {
    if (item === "-") {
      arr.splice(index, 1);
      arr[index] = arr[index].toUpperCase();
    }
  });
  str = arr.join("");
  return str;
}

console.log(
  camelize("background-color") == "backgroundColor",
  camelize("list-style-image") == "listStyleImage",
  camelize("-webkit-transition") == "WebkitTransition"
);

// Фильтрация по диапазону

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.slice(a, b);
}

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (совпадающие значения)

alert(arr); // 5,3,8,1 (без изменений)

let schedule = {};

function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let person in salaries) {
  sum += salaries[person];
}
console.log(sum);

// до вызова функции

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// после вызова функции
console.log(menu);

let calculator = {
  read() {
    this.a = +prompt("Введите значение a:", 0);
    this.b = +prompt("Введите значение b:", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();

console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};

ladder.up().up().up().up().down().up().down().showStep(); // 1

// Случайное число от min до max

function random(min, max) {
  let num;
  while (true) {
    num = Math.round(Math.random() * 10);
    if (num > min && num <= max) return num;
  }
}

console.log(random(1, 5)); // 1.2345623452
console.log(random(1, 5)); // 3.7894332423
console.log(random(1, 5)); // 4.3435234525

// образец
function random(min, max) {
  return min + Math.random() * (max - min);
}

// Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}

console.log(camelize("background-color"));

// Фильтрация по диапазону

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (совпадающие значения)

console.log(arr); // 5,3,8,1 (без изменений)

// Скопировать и отсортировать массив

function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)

// Фильтрация по диапазону "на месте"

function filterRangeInPlace(arr, a, b) {
  array = arr.filter((item) => a <= item && item <= b);
}

let array = [5, 3, 8, 1];

filterRangeInPlace(array, 1, 4); // удалены числа вне диапазона 1..4

console.log(array); // [3, 1]

// Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);

// Создать расширяемый калькулятор

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;

    return this.methods[op](a, b);
  };

  this.addMethod = (name, func) => (this.methods[name] = func);
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

// Трансформировать в массив имён

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];
let test = [];
users.map((item) => test.push(item.name));

let names = test.join(", ");

console.log(names); // Вася, Петя, Маша

// Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((item) => ({
  fullName: item.name + " " + item.surname,
  id: item.id,
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
console.log(usersMapped);

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

// Отсортировать пользователей по возрасту

let ages;

function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

console.log(arr);

// теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// Перемешайте массив

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);
// arr = [3, 2, 1]

shuffle(arr);
console.log(arr);
// arr = [2, 1, 3]

shuffle(arr);
console.log(arr);
// arr = [3, 1, 2]
// ...

// Получить средний возраст

function getAverageAge(users) {
  return users.reduce((sum, current) => sum + current.age, 0) / arr.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// Оставить уникальные элементы массива

function unique(arr) {
  let res = [];

  for (let str of arr) {
    if (!res.includes(str)) res.push(str);
  }

  return res;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O

// Сумма с помощью замыканий

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

// sum(1)(2) = 3;
// sum(5)(-1) = 4;

// Фильтрация с помощью функции

function inBetween(a, b) {
  return function (item) {
    return a <= item && item <= b;
  };
}

function inArray(array) {
  return function (Item) {
    return array.includes(Item);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// Сортировать по полю

function byField(arg) {
  // return function (a, b) {
  //   return a[arg] > b[arg] ? 1 : -1;
  // };
  return (a, b) => (a[arg] > b[arg] ? 1 : -1);
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));

// Армия функций

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      // функция shooter
      alert(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

function buildFun(n) {
  let res = [];

  for (var i = 0; i < n; i++) {
    let j = i;
    res.push(function () {
      console.log(j);
      return j;
    });
  }
  return res;
}

console.log(buildFun(10));

// describe("Tests", () => {
//   it("test", () => {
//     for (var i = 0; i < 10; i++) {
//       Test.assertEquals(buildFun(10)[i](), i);
//     }
//   });
// });

console.log(buildFun(10)[4]());

function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let sum = marks.reduce((sum, current) => sum + current);
  return Math.floor(sum / marks.length);
}

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
console.log(getAverage([1, 5, 87, 45, 8, 8]));
console.log(
  getAverage([4, 6, 13, 5, 19, 5, 10, 15, 13, 15, 15, 14, 11, 12, 17])
);

// setInterval
function printNumbers(from, to) {
  let i = from;
  let timerId = setInterval(() => {
    console.log(i);
    if (i === to) clearInterval(timerId);
    i++;
  }, 1000);
}

printNumbers(1, 5);

// setTimeout
function printNumbers(from, to) {
  let i = from;

  setTimeout(function run() {
    console.log(i);

    let timerId = setTimeout(run, 1000);

    if (i === to) clearTimeout(timerId);
    i++;
  }, 1000);
}

printNumbers(1, 5);

// Введение в браузер

let close = document.getElementById("close");
let open = document.getElementById("open");
let list = document.getElementById("list");
let isListOpen = false;

let run = function () {
  isListOpen = !isListOpen;

  if (isListOpen) {
    close.style.display = "none";
    open.style.display = "inline";
    list.style.display = "block";
  } else {
    close.style.display = "inline";
    open.style.display = "none";
    list.style.display = "none";
  }
};

// Добавить кнопку закрытия

let cls = document.querySelectorAll(".remove-button");
let remove = function (idx) {
  cls[idx].parentElement.style.display = "none";
};

// Считаем потомков

// ... ваш код...
// let arr = document.querySelectorAll('li');
let arr = document.querySelectorAll("li");

arr.forEach((el) => {
  let qnt = el.querySelectorAll("li").length;
  let li = el.firstChild.data.trim();
  alert(li + ": " + qnt);
});
