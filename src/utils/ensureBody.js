/**
 * 
 * @param {string|{}|{key:string,value:any}[]} value 
 */
export default function ensureBody(value) {
  if (typeof value == "string")
    return value;

  if (typeof value == "array") {
    let obj = {};
    for (let i = 0; i < value.length; i++)
      obj[value[i].key] = value[i].value;
    return JSON.stringify(obj);
  }
  
  if (typeof value == "object")
    return JSON.stringify(value);
    
  console.log("ensureBody: Unexpected type " + typeof value);
}