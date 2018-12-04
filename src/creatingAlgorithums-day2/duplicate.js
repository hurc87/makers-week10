// Find Duplicates

//1. Describe the problem (sometimes a diagram helps)
// - Given a list of words, find all words that appear more than once.

//2. Create test cases.
// - arr = ['apple', 'pear', 'apple']
// - Apple should be the only thing in the list which is highlighted.

//3. Think about how you would do this, given this task in real life.
// - Go through the list and write each one on a new list, if then repeated put a tick next to the word.

//4. Write down each step in plain english
// - Make an empty array for the single words
// - Make an empty array for the duplicated words
// - Iterate through the array, and pushing the words to the new array
// - For each word look in the new array to see if they are already in there.
// - If they are push them into a repeated word array?

//5. If it is possible directly, translate each of the steps into code
var testArray = [1,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10];
var singleArr = [];
var dupArr = [];
var spare = [];

function findDups(ar1, ar2, ar3, ar4) {
// Go through each thing in the ar1 array
  ar1.forEach( function(v) {
    // If ar2 includes the item v
    if(ar2.includes(v)){
      // push item v into ar3
      ar3.push(v)
      // if it does not
    } else {
      // push it into ar2
      ar2.push(v)
    };
  });
  // clears ar2
  ar2.length = 0;
  // Go through it again to make sure there is only 1 of each duplicate in the new array
  // Go through each thing in the ar1 array
    ar3.forEach( function(v) {
      // If ar2 includes the item v
      if(ar2.includes(v)){
        // push item v into ar3
        ar4.push(v)
        // if it does not
      } else {
        // push it into ar2
        ar2.push(v)
      };
    });
    return ar2;
};

findDups(testArray, singleArr, dupArr, spare);


console.log("the items that were duplcaited in the first array " + singleArr);

//6. Otherwise, think about each step separately, and repeat 3 to 6.


//7. Once everything is translated to code, run your testcases
