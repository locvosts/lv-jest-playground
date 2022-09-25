const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  debugger;
  expect(sum(1, 2)).toBe(3);
});

test('null', () => {
  const n = 1;
  debugger;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  debugger;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});