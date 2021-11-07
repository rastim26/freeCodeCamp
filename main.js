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
