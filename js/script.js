let a = prompt('Podaj a');
let b = prompt('Podaj b');
let value = (a * a) - (2 * a * b) - (b * b);
console.log('a = ' + a);
console.log('b = ' + b);

// console.log('(' + a + ' * ' + a + ')' + ' - ' + '(' + '2 ' + '* '  + a + ' * ' + b + ')' + ' - ' + '(' + b + ' * ' + b + ') = ' + value);

console.log(`(${a} * ${a}) - (2 * ${a} * ${b}) - (${b} * ${b}) = ${value}`);

// if (value > 0) {
//   console.log('wynik dodatni');
// } else if (value === 0) {
//   console.log('zero');
// } else {
//   console.log('wynik ujemny');
// }

let result = (value > 0) ? 'wynik dodatni':
  (value < 0) ? 'wynik ujemny':
  (a.length == 0) || (b.length == 0) ? 'nie podałeś wartości':
  'zero';

console.log(result);