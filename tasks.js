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
