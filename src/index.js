
exports.min = function min (array) {
  if(!Array.isArray(array)){
    return 0
  } else if (!array.length){
    return 0
  } else {
    return Math.min(...array)
  }
}

exports.max = function max (array) {
  if(!Array.isArray(array)){
    return 0
  } else if (!array.length){
    return 0
  } else {
    return Math.max(...array);
  }
}

exports.avg = function avg (array) {
  if(!Array.isArray(array)){
    return 0
  } else if (!array.length){
    return 0
  }else {
    return array.reduce((a, b) => a + b, 0) / array.length;
  }
}
