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
