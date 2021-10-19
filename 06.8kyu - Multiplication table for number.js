function multiTable(number) {
  let tab = "";
  for (i = 1; i <= 10; i++) {
    tab += i + " * " + number + " = " + i * number + (i < 10 ? "\n" : "");
  }

  return tab;
}

//3 months ago Refactor Discuss
function multiTable(number) {
  let tab = "";
  let i = 1;
  //let add = '';
  do {
    let p = i * number;
    let expr = `${i} * ${number} = ${p}`;
    tab = tab + expr;
    if (i < 10) {
      tab = tab + "\n";
    }
    i++;
  } while (i <= 10);
  console.log(tab);
  return tab;
}
