/*
Challenge:
Jaden Smith, is known for almost always capitalizing every word.
Your task is to convert strings to how they would be written by Jaden Smith.
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them. 
*/

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
  
  var str = "How can mirrors be real if our eyes aren't real";

  
  console.log(str.toJadenCase())