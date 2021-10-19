var replaceDots = function (str) {
  for (let i = 0; i < str.length; i++) {
    str = str.replace(".", "-");
  }

  return str;
};
