
/*
function stripValue(value) {
  if (value instanceof Object)
    return stripObj(value);
  if (value instanceof Array)
    return value.map(item => stripValue(item));
  return value;
}

function stripObj(result, array) {

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    result[item.key] = stripValue(item.value);
  }
}

 * @param {{type: string, key: string, value: any}[]} array 
export default function arrToObj(array) {
  // i lost my notes
}

*/