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

Quick test for an array with only 10 items in it				
	        .last	  .reverse	.sort	  .shuffle
1	        0.114	  0.112	    0.125	  0.122
2	        0.125	  0.131	    0.134	  0.123
3	        0.115	  0.127	    0.125	  0.122
4	        0.122	  0.148	    0.129	  0.131
5	        0.139	  0.12	    0.124	  0.122
Average	  0.123	  0.1276	  0.1274	0.124

Once I was happy each of the methods and timer was working I ran each method on different sized arrays, running each one 10 times, then taking the total to put on the final graph. 

The final table of averages:

	                      Time in ms			
Size of array	  Last	    Reverse	  Shuffle	    Sort
  5000	        0.1441	  0.0253	  2.6257	    2.0726
  10000	        0.1464	  0.0343	  4.0712	    4.248
  15000	        0.1481	  0.0354	  3.8375	    6.6649
  20000	        0.1571	  0.0418	  3.1414	    0.0613
  25000	        0.1611	  0.0439	  3.5015	    11.3141
  30000	        0.1522	  0.0468	  3.2678	    15.061
  35000	        0.1606	  0.04873	  3.1564	    16.1527
  40000	        0.1629	  0.0567	  3.5379	    18.9638
  50000	        0.165	    0.071	    3.6017	    25.9385
  100000	      0.1561	  0.1605	  5.2056	    54.9964
  200000	      0.165	    0.1922	  8.058	      111.6964
  300000	      0.1628	  0.2772	  10.658	    169.5092
  400000	      0.178	    0.3914	  13.063	    236.7155
  500000	      0.1725	  0.5116	  15.831	    309.5467

