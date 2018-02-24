alert('(a * a) - (2 * a * b) - (b * b)')
var a = prompt('Podaj a');
var b = prompt('Podaj b');
var value = (a * a) - (2 * a * b) - (b * b);
console.log(value);

if (value > 0) {
  console.log('wynik dodatni');
} else {
  console.log('wynik ujemny');
}