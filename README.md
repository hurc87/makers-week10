Algorithmic Complexity

Learning objectives
By the end of this week, the goal is to be able to answer "yes" to these questions:

- Can you mention efficiency as one of the dimension of a good piece of code
- Can you join a conversation about algorithms and their complexity?

Timing code
We were given 4 methods in ruby and asked to time how long each method took to complete its function on different sized array. We were allowed to pick any programming language we wanted to complete the challenge in. The methods were:

- last
- reverse
- shuffle
- sort (if you are generating an array from a range, don't forget to shuffle it first to not bias the results)

I chose to work in javascript and althought there are ways to perform a shuffle, there is no .shuffle method already setup like there is in ruby. I used the following function to perform a shuffle on the arrays before the timer was set:

// ******************** Shuffle method ********************
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

// ******************** Shuffle method ********************

This method replaced the original array with the newly shuffled version.



I set up a quick sample of an array with 10 numbers in and timed each method 5 times, the results are below:



// ******************** Shuffle method **************************
The graph for the shuffle method:

// ******************** Last method *****************************
The graph for the last method:

// ******************** Reverse method **************************
The graph for the reverse method:

// ******************** Sort method *****************************
The graph for the sort method:



// ******************** Comparing the results ********************
Once I was happy each of the methods and timer was working I ran each method on different sized arrays, running each one 10 times, then taking the total to put on the final graph.

The final table of averages:

![Total table map]('../images/totalTable.png')
