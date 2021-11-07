function Calc(oper, a, b) {
  if (!(oper && a && b)) {
    return "Enter all the parameters!";
  }
  if (!(typeof a === "number" && typeof b === "number")) {
    return "Error. Operand is not a number";
  }
  const obj = {
    sum: a + b,
    sub: a - b,
    multi: a * b,
    div: a / b,
    prc: a % b,
    stp: a ** b,
  };

  let res = obj[oper];

  if (!(oper in obj)) return "Unknown operation";

  return res;
}

console.log(Calc("sum", 8, 2));
console.log(Calc("multi", 8, 2));
console.log(Calc("sub", 8, 2));
console.log(Calc("div", 8, 2));
console.log(Calc("prc", 8, 2));
console.log(Calc("stp", 8, 2));
console.log(Calc("some else", 8, 2));
console.log(Calc("sum", "Some string", 2));
console.log(Calc("sum", 8, true));
console.log(Calc("sum", 8));
