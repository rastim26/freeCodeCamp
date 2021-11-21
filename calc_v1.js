function Calc(oper, a, b) {
  let result;
  if (oper && a && b) {
    if (typeof a === "number" && typeof b === "number") {
      switch (oper) {
        case "sum":
          result = a + b;
          break;
        case "sub":
          result = a - b;
          break;
        case "multi":
          result = a * b;
          break;
        case "div":
          result = a / b;
          break;
        case "prc":
          result = a % b;
          break;
        case "stp":
          result = a ** b;
          break;
        default:
          result = "unknown operation";
      }

      // oper === "sum"
      //   ? a + b
      //   : oper === "multi"
      //   ? a * b
      //   : oper === "sub"
      //   ? a - b
      //   : oper === "div"
      //   ? a / b
      //   : oper === "prc"
      //   ? a % b
      //   : oper === "stp"
      //   ? a ** b
      //   : "unknown operation";
    } else {
      result = "Error. Operand is not a number";
    }
  } else {
    result = "Error. Enter all the parameters!";
  }
  return result;
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
