const str = "name=biggrassdog&age=18&location=changzhou";

const querystring = require("querystring");

const obj = querystring.parse(str);

console.log(obj);

const myObj = {
  a: 1,
  b: 2,
  c: 3,
};

const mystr = querystring.stringify(myObj)
console.log(mystr);