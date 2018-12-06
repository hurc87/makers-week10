var testArray = [ 6, 5, 4, 3, 2, 1];

function diySort(array){
  function stepOne(){
    if( array[0] > array[1] ) {
      var temp1 = array[0];
      array[0] = array[1];
      array[1] = temp1;
    };
    if( array[2] > array[3] ) {
      var temp1 = array[2];
      array[2] = array[3];
      array[3] = temp1;
    };
    if( array[4] > array[5] ) {
      var temp1 = array[4];
      array[4] = array[5];
      array[5] = temp1;
    };
  };
  function stepTwo(){
    if( array[1] > array[2] ) {
      var temp1 = array[1];
      array[1] = array[2];
      array[2] = temp1;
    };
    if( array[3] > array[4] ) {
      var temp1 = array[3];
      array[3] = array[4];
      array[4] = temp1;
    };
  };
  stepOne();
  stepTwo();
  stepOne();
  stepTwo();
  stepOne();
  stepTwo();


  return array;
};
