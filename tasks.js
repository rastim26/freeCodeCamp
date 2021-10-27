//Проверка логина
let login, pass;

login = prompt("Кто там?");

if (login === "админ") {
  pass = prompt("Пароль?");
  if (pass === "главный") {
    alert("Здравствуйте!");
  } else if (pass === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (login === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
