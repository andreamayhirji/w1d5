// Create a module that exports a function that takes a number as a parameter and stores it in a list. The list should not be accessible from outside the module.

// Export another function that returns a version of the data list that is sorted in ascending order. The function you use to sort the data correctly should not be accessible from outside the module. (Think back to the Custom Sorting Exercise when handling sorting)

// Implement a Node.js script that imports the functionality of your module, adds at least 5 different data points to the module's data list, and outputs the sorted list.





// I can use dataList because I've assigned a new variable that is using the functions from data-list.js
var dataList = require('./data-list');


//this runs the function that creates a list
console.log(dataList.addToList([1, 23, 2342, 654, 2, 5]));

//this runs the function that sorts the list that has been passed through the addToList function.
console.log(dataList.sortList())

