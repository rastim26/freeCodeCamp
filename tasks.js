//Проверка логина
prompt("Ваш логин?", login);

if (login === "Админ") {
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
