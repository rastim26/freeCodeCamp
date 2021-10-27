//Проверка логина
let login, pass;

login = prompt("Ваш логин?");

if (login === null) {
  alert("Отменено");
} else if (login === "Админ") {
  prompt("Введите пароль:", pass);
  if ((pass = "Я главный")) {
    alert("Здравствуйте!");
  } else if ((pass = undefined)) {
    alert("Отменено");
  } else {
    alert("Не верный пароль");
  }
} else {
  alert("Я вас не знаю");
}
