/**
 * 
 * @param {string|{}|{key:string,value:any}[]} value 
 */
export default function ensureBody(value, allowString = false) {
  try {
    if (!value) 
      return allowString ? "" : {};

    if (typeof value == "string")
      return allowString ? value : JSON.parse(value);

    if (typeof value == "array") {
      let obj = {};
      for (let i = 0; i < value.length; i++)
        obj[value[i].key] = value[i].value;
      return obj;
    }
    
    if (typeof value == "object")
      return value;
      
    console.log("ensureBody: Unexpected type " + typeof value);
  } catch(e) {
    console.log(e);
    return e;
  }
  return {};
}