var a = prompt('Podaj a');
var b = prompt('Podaj b');
var value = (a * a) - (2 * a * b) - (b * b);
console.log('a = ' + a);
console.log('b = ' + b);
console.log('(a * a) - (2 * a * b) - (b * b)' + ' = ' + value);

if (value > 0) {
  console.log('wynik dodatni');
} else {
  console.log('wynik ujemny');
}