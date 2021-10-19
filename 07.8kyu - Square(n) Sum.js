function squareSum(numbers) {
  let sum = 0;
  numbers.forEach((n) => (sum += n ** 2));
  return sum;
}

//3 months ago Refactor
function squareSum(numbers) {
  let sum = 0;
  for (i in numbers) {
    sum += numbers[i] ** 2;
  }
  return sum;
}
