module.exports = pixecho

function pixecho(delay, ArrayType, reverse){
  if(!(this instanceof pixecho)) return new pixecho(delay, ArrayType, reverse);
  this.buffer = new ArrayType(delay * 2);
  this.endpoint = delay * 2 - 1
  this.writeOffset = 0
  this.readOffset = reverse ? delay * 2 - 1: delay - 1;
  this.delay = delay
  return this
}

pixecho.prototype.read = function(){
  if(this.readOffset === this.endpoint) this.readOffset = 0
  return this.buffer[this.readOffset++] 
}

pixecho.prototype.write = function(){
  if(this.writeOffset === this.endpoint) this.writeOffset = 0;
  return this.buffer[this.writeOffset++] = arguments[0]
}

pixecho.prototype.reverseRead = function(){
  if(this.readOffset ===  0) this.readOffset = this.endpoint
  return this.buffer[this.readOffset--] 
}

pixecho.prototype.reverseWrite = function(){
  if(this.writeOffset === 0) this.writeOffset = this.endpoint
  return this.buffer[this.writeOffset--] = arguments[0]
}
