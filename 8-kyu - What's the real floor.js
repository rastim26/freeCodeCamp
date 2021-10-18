function getRealFloor(n) {
  if (n > 0) {
    n--;
  }
  if (n > 12) {
    n--;
  }
  return n;
}
