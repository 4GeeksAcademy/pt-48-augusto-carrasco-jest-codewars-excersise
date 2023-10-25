const alphabetValues = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

function high(x) {
  const arrayFromString = x.split(" ");
  const arrayOfArraysFromString = arrayFromString.map((word) => word.split(""));
  const wordValue = arrayOfArraysFromString.map((word) =>
    word.map((letter) => alphabetValues[letter]).reduce((a, c) => a + c, 0)
  );
  let aux = "";
  let aux2 = 0;
  wordValue.forEach((e, i) => {
    if (e > aux2) {
      aux = arrayFromString[i];
      aux2 = e;
    }
  });
  return aux;
}
module.exports = high;
