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

function find_duplicate_in_array(arra1) {
        var object = {};
        var result = [];

        arra1.forEach(function (item) {
          if(!object[item])
              object[item] = 0;
            object[item] += 1;
        })

        for (var prop in object) {
           if(object[prop] >= 2) {
               result.push(prop);
           }
        }

        return result;

    };

// Timing the method
// Times how long the method takes to run
function someFunction() {
  find_duplicate_in_array(arr);
};

console.time('someFunction');

someFunction(); // Whatever is timed goes between the two "console.time"

console.timeEnd('someFunction');
