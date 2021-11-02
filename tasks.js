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
