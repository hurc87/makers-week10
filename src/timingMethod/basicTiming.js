// Shuffle method
// Shuffle the array, but replaces original array with the newly shuffled one
function shuffle(array) {

  for (var i = array.length-1; i >=0; i--) {

      var randomIndex = Math.floor(Math.random()*(i+1));
      var itemAtIndex = array[randomIndex];

      array[randomIndex] = array[i];
      array[i] = itemAtIndex;
  }
  return array;

};

var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
shuffle(arr);

// Result of the shuffled array
console.log("The shuffled array " + arr);

// Last method
// Selects last item in the array
function last(newArray) {

  var last = newArray[newArray.length - 1]

  return last

};

console.log("The last number of the array is array " + last(arr));


// Reverse method
// Javascript already has the reverse method set up which is just
//          array.reverse();

console.log("This is the array in reverse order " + arr.reverse());

// Sort method
// Javascript already has the sort method set up which is just
//          array.sort();

console.log("This is the array in the sorted order " + arr.sort());

// Timing the method 
// Times how long the method takes to run
function someFunction() {
  arr.sort()
};

console.time('someFunction');

someFunction(); // Whatever is timed goes between the two "console.time"

console.timeEnd('someFunction');
