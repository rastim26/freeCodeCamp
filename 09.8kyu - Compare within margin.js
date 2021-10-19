function closeCompare(a, b, margin) {
  if (margin === undefined || margin === null) {
    margin = 0;
  }
  if (margin >= Math.abs(b - a)) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}
