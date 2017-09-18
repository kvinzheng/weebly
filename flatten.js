function flatten(arr) {
  let temp = [];
  if(!arr.length) return arr;
  if (Array.isArray(arr[0])) {
    temp = flatten(arr[0])
  } else {
    temp = [ arr[0] ];
  }

  return temp.concat(flatten(arr.slice(1)));
}
module.exports = { flatten };
