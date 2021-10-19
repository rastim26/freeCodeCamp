function digitize(n) {
  let arr = n.toString().split("").reverse();

  for (i in arr) {
    arr[i] = Number(arr[i]);
  }
  return arr;
}
