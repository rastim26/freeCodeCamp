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
