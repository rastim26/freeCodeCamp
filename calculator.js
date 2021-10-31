function Calc(oper, a, b) {
  if (oper && a && b) {
    if (typeof a === "number" && typeof b === "number") {
      return oper === "sum"
        ? a + b
        : oper === "multi"
        ? a * b
        : oper === "sub"
        ? a - b
        : oper === "div"
        ? a / b
        : oper === "prc"
        ? a % b
        : oper === "stp"
        ? a ** b
        : "unknown operation";
    } else {
      return "Error. Operand is not a number";
    }
  } else {
    return "Error. Enter all the parameters!";
  }
}

Calc("sum", 1, 3);
