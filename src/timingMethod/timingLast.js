// To fill the array before a test

var arr = [];

for (var i = 1; i <= 100000; i++) {
   arr.push(i);
};

// Shuffle method
function shuffle(array) {

  for (var i = array.length-1; i >=0; i--) {

      var randomIndex = Math.floor(Math.random()*(i+1));
      var itemAtIndex = array[randomIndex];

      array[randomIndex] = array[i];
      array[i] = itemAtIndex;
  }
  return array;

};

shuffle(arr);

// Last method
// Selects last item in the array
function last(newArray) {

  var last = newArray[newArray.length - 1]

  return last

};

// Timing the method
// Times how long the method takes to run
function someFunction() {
  last(arr)
};

console.time('someFunction');

someFunction(); // Whatever is timed goes between the two "console.time"

console.timeEnd('someFunction');
