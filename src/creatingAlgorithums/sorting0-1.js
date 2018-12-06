var testArray = [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0];

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

console.log(sorting(testArray));
