// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;


// but you don't so you're going to write it from scratch:

// var stringifyJSON = function(obj) {
//   for (key in obj){
    
//   }
// };
var stringifyJSON = function(obj){
  if (typeof obj === "string"){
    return '"' + obj + '"';
  } else if(obj === null){
    return "null";
  }
  if (Array.isArray(obj)){
    var myArray = []
    for (let i = 0; i < obj.length; i++){
      myArray.push(stringifyJSON(obj[i]));
    }
    return "[" + myArray.join() + "]";
  } else if (typeof obj === "object"){
    var myObj = []
    for(let key in obj){
      if(typeof obj[key] !== "function" && obj[key] !== undefined){
      myObj.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]))
      }
    }
    return "{" + myObj.join() + "}";
  }
  return obj + '';
}