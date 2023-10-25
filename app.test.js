const high = require('./app');

test('Check if the returned word is the highest value, taxi', () => {
  expect(high('man i need a taxi up to ubud')).toBe('taxi');
});
test('Check if the returned word is the highest value, volcano', () => {
  expect(high('what time are we climbing up the volcano')).toBe('volcano');
});
test('Check if the returned word is the highest value, semynak', () => {
  expect(high('take me to semynak')).toBe('semynak');
});
test('Check if the returned word is the highest value, aa', () => {
  expect(high('aa b')).toBe('aa');
});
test('Check if the returned word is the highest value, b', () => {
  expect(high('b aa')).toBe('b');
});
test('Check if the returned word is the highest value, bb', () => {
  expect(high('bb d')).toBe('bb');
});
test('Check if the returned word is the highest value, d', () => {
  expect(high('d bb')).toBe('d');
});
test('Check if the returned word is the highest value, bb', () => {
  expect(high('bb d')).toBe('bb');
});
test('Check if the returned word is the highest value, aaa', () => {
  expect(high('aaa b')).toBe('aaa');
});