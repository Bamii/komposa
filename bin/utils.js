const is = (type, value) => getType(value).toLowerCase() === type.toLowerCase();

const getType = o => Object.prototype.toString.call(o).split(' ')[1].slice(0, -1).toLowerCase();

module.exports = {
  is,
  getType
}
