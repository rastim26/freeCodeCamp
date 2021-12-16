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

showVerticalMessage("марафончиконок");
showVerticalMessage("громофон");

function showVerticalMessage(str) {
  let firstLetter = str[0] === "м" ? str[0].toUpperCase() : str[0];

  let newStr = firstLetter + str.slice(1, 10);

  for (let char of newStr) {
    console.log(char);
  }

  // let firstLetter = "";
  // let restStr = "";
  // let truncateStr;

  // if (str.length > 10) truncateStr = str.slice(0, 10);

  // for (let i = 0; i < truncateStr.length; i++) {
  //   if (i === 0 && truncateStr[i] === "м") {
  //     firstLetter = truncateStr[0].toUpperCase() + "\n";
  //     continue;
  //   }
  //   restStr += truncateStr[i] + "\n";
  // }

  // return firstLetter + restStr;
}
