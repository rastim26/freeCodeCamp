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
