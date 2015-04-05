## data-delay

a cirular buffer that creates a delay.  You set the length of the delay in TypedArray values, and then you read and write to it.

### usage

first you construct the delay function with a "length" param, and a TypedArray constructor

```js 
var ddelay = require('data-delay')
var delay = ddelay(1000, Int8Array, reverse?)
// this creates a delay loop 1000 units long, in this case the unit being a single Int8Array value
// that means a value written now will be return after 1000 calls of .read()
delay.read()
delay.write(255)
```

delay.read and delay.write will automatically index and return the values.
if you read and don't write, or vice versa, you will off-center the circular buffer.  may be kewl.

### tests

seems to work, based on my previous experience with circular delay buffers, such as [jdelay](https://npmjs.org/package/jdelay)

:^P

