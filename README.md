on arrays

last
reverse
shuffle
sort

************************************************************************************

function someFunction() {
  4+5
};

console.time('someFunction');

someFunction(); // Whatever is timed goes between the two "console.time"

console.timeEnd('someFunction');

run in terminal by going to directory and running
    node timing.js

************************************************************************************

shuffle an array

function shuffle(arr) {

  for (var i = arr.length-1; i >=0; i--) {

      var randomIndex = Math.floor(Math.random()*(i+1));
      var itemAtIndex = arr[randomIndex];

      arr[randomIndex] = arr[i];
      arr[i] = itemAtIndex;
  }
  return arr;

};

var array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
shuffle(array);

************************************************************************************
# makers-week10
