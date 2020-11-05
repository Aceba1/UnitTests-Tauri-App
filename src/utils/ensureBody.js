/**
 * 
 * @param {string|{}|{key:string,value:any}[]} value 
 */
export default function ensureBody(value) {
  if (value instanceof String)
    return value;
  if (value instanceof Object)
    return JSON.stringify(value);
  if (value instanceof Array) {
    let obj = {};
    for (let i = 0; i < value.length; i++)
      obj[value[i].key] = value[i].value;
    return obj;
  }
  console.log("ensureBody: Unexpected type " + typeof value);
}