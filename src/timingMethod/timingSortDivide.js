// To fill the array before a test
var arr = [];

for (var i = 1; i <= 50000; i++) {
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

// Sorting method

function diySort(array){

  function stepOne(){
    for (var i = 0; i <= array.length-2; i+=2) {
        if( array[i] > array[i+1] ){
          var temp1 = array[i];
          array[i] = array[i+1];
          array[i+1] = temp1;
        };
    };
  };

  function stepTwo(){

    for (var i = 1; i <= array.length-3; i+=2) {
        if ( array[i] > array[i+1] ){
          var temp1 = array[i];
          array[i] = array[i+1];
          array[i+1] = temp1;
        };
    };
  };

  function bothSteps(){
    stepOne();
    stepTwo();
  };

  var runProgram = array.length/2;
  runProgram = Math.round(runProgram);

  for(var i=0; i < runProgram; i++){
    bothSteps();
  };

  return array;
};

// Timing the method
// Times how long the method takes to run
function someFunction() {
  diySort(arr)
};

console.time('someFunction');

someFunction(); // Whatever is timed goes between the two "console.time"

console.timeEnd('someFunction');
