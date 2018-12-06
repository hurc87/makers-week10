// To fill the array before a test

var arr = [];

arr.push(1);

for (var i = 0; i < 99999; i++) arr.push(0);

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

// Sorting method
function sorting(array){

  var newArray = [];

  array.forEach( function(v) {
    if(v == 0) {
      newArray.unshift(v)
    } else {
      newArray.push(v)
    };
  });
  return newArray;
};

// Timing the method
// Times how long the method takes to run
function someFunction() {
  sorting(arr);
};

console.time('someFunction');

someFunction(); // Whatever is timed goes between the two "console.time"

console.timeEnd('someFunction');
