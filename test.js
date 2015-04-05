var ddelay = require('./')

var delay = ddelay(4, Float32Array, true)
var ndelay = ddelay(4, Float32Array)

var x = 0

while(x < 8){
  delay.write(x)
  ndelay.write(x)
  console.log('n', ndelay.read())
  console.log(delay.reverseRead())
  
  x++
}
