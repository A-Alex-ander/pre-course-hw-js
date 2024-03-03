const arr44 = "1, 48, -4, 5, 4, -3, -10, 2, 32, -23, 44";

const xr = 5;

const func = (a) => {
  const arr = [];
  while (a > 0) {
    arr.push(a);
    a--;
  }
  return arr;
};

console.log(func(7));
