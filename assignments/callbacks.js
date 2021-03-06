// Create a callback function and invoke the function to test your work. You have been provided an example of a problem
// and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the
// rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

last(items, function(last) {
  console.log(last);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
};

sumNums(2, 3, function(value) {
  console.log(value);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(2, 3, function(value) {
  console.log(value);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  let is = false;
  for (i = 0; i < list.length; i++) {
    if (item === list[i]) {
      is = true;
    }

    else {
      continue;
    }
  }
  // Pass true to the callback if it is, otherwise pass false.
  console.log(is);
  return cb(is);
}

contains('Pencil', items, function(value) {
  console.log(value);
});

/* STRETCH PROBLEM */

const items2 = ['Pencil', 'Notebook', 'yo-yo', 'yo-yo', 'Gum'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

removeDuplicates(items2, function(dups) {
  let unique = {};
  dups.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);

  console.log(removeDuplicates);
});