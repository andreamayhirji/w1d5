//this is .js file is my module.


//this is my empty list
var newArray = [];

//this is my function that will take a number and push it to a list.
var addToList = function(number) {
  for(var i = 0; i < number.length; i++){
      newArray.push(number[i]);
    }
  return newArray;
}

// end of function

//this is my function that will take the list created in addToList

var sortList = function(){
  newArray.sort(function(a, b) {
    return a - b;
  });
  return newArray;
}


//this is the module object that I am requiring in my index.js
// module.exports.addToListFn = addToList;

//or I can write it this way.
module.exports = {
  addToList,
  sortList
}