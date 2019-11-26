const is = () => {
  console.log(Object.getPrototypeOf(this));
  console.log(getType(this));
}

const getType = o =>
  Object.prototype.toString
    .call(o)
    .split(' ')[1]
    .slice(0, -1)
    .toLowerCase();

is.call();