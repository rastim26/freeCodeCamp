function buildFun(n) {
  let res = [];

  for (var i = 0; i < n; i++) {
    let j = i;
    res.push(function () {
      console.log(j);
      return j;
    });
  }
  return res;
}

console.log(buildFun(10));

// describe("Tests", () => {
//   it("test", () => {
//     for (var i = 0; i < 10; i++) {
//       Test.assertEquals(buildFun(10)[i](), i);
//     }
//   });
// });

console.log(buildFun(10)[4]());
