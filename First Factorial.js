
// CoderByte Number 2 Easy First Factorial

function FirstFactorial(num) {
  var a = [];
    for(var i = num; i > 0; i -= 1) {
      a.push(i);
    }
  var c = 1;
    for(var x = 0; x < output.length; x += 1) {
      c *= a[x];
    }
  return c;
}
