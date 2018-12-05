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

// Duplicate method
// Finds all the duplicates in the array
var singleArr = [];
var dupArr = [];
var spare = [];

function findDups(ar1, ar2, ar3, ar4) {
  ar1.forEach( function(v) {
    if(ar2.includes(v)){
      ar3.push(v)
    } else {
      ar2.push(v)
    };
  });
  ar2.length = 0;
    ar3.forEach( function(v) {
      if(ar2.includes(v)){
        ar4.push(v)
      } else {
        ar2.push(v)
      };
    });
    return ar2;
};

// Timing the method
// Times how long the method takes to run
function someFunction() {
  findDups(arr, singleArr, dupArr, spare);
};

console.time('someFunction');

someFunction(); // Whatever is timed goes between the two "console.time"

console.timeEnd('someFunction');
