# Algorithmic Complexity

## Learning objectives

By the end of this week, the goal is to be able to answer "yes" to these questions:

- Can you mention efficiency as one of the dimension of a good piece of code
- Can you join a conversation about algorithms and their complexity?


## Timing code

We were given 4 methods in ruby and asked to time how long each method took to complete its function on different sized array. We were allowed to pick any programming language we wanted to complete the challenge in. The methods were:

- last
- reverse
- shuffle
- sort (if you are generating an array from a range, don't forget to shuffle it first to not bias the results)

To time each of the functions I used the following code:

        function someFunction() {
          This is where the code will be placed which needs to be timed.
        };

        console.time('someFunction');

            someFunction(); // Whatever is timed goes between the two "console.time"

        console.timeEnd('someFunction');


I chose to work in javascript and although there are ways to perform a shuffle, there is no .shuffle method already setup like there is in ruby. I used the following function to perform a shuffle on the arrays before the timer was set:


        function shuffle(array) {

          for (var i = array.length-1; i >=0; i--) {

              var randomIndex = Math.floor(Math.random()\**(i+1));
              var itemAtIndex = array[randomIndex];

              array[randomIndex] = array[i];
              array[i] = itemAtIndex;
          }
          return array;

        };

        shuffle(arr);


This method replaced the original array with the newly shuffled version.

I set up a quick sample of an array with 10 numbers in and timed each method 5 times, the results are below:

![Small table map](https://user-images.githubusercontent.com/37640287/49434107-586ff280-f7ab-11e8-80b7-ee9f37b99884.png)


### Comparing the results

Once I was happy each of the methods and timer was working I ran each method on different sized arrays, running each one 10 times, then taking the total to put on the final graph. The graph had a very wide range of times, this caused methods like .last and .reverse to not really show as the methods like .sort and .shuffle time range was quite a bit higher. Because of this I have included the table of results rather than the graph. However the individual graph of results are below for each method.

### The final table of averages:

![Total table map](https://user-images.githubusercontent.com/37640287/49387674-5b6ed280-f71a-11e8-806f-16e18138ea9b.png)


### Shuffle method

The graph for the shuffle method:

![Shuffle method Chart](https://user-images.githubusercontent.com/37640287/49387935-e8199080-f71a-11e8-8daa-02874a7d248a.png)


### Last method

As there is no .last in javascript, I used the following code:

        function last(newArray) {

          var last = newArray[newArray.length - 1]

          return last

        };

The graph for the last method:

![Last method Chart](https://user-images.githubusercontent.com/37640287/49388023-0aaba980-f71b-11e8-9845-363251038973.png)


### Reverse method

The graph for the reverse method:

![Reverse method Chart](https://user-images.githubusercontent.com/37640287/49387989-fbc4f700-f71a-11e8-9dd8-367b5824298f.png)


### Sort method

The graph for the sort method:

![Sort method Chart](https://user-images.githubusercontent.com/37640287/49387889-d3d59380-f71a-11e8-97b5-2dced969188d.png)



## Build your own algorithms

The challenge is now to build our own algorithms for the following functions:

- Shuffling
  Implement your own algorithm for shuffling (you cannot use .shuffle).

- Reversing
  Implement your own algorithm for reversing an array (you cannot use .reverse).

- Mechacoach Pairing
  Given a list of students names, create all possible pairings.

- Find Duplicates
  Given a list of words, find all words that appear more than once.

-  Most frequent words
  Given a text, find which are the ten most common words.

- Sorting 0s and 1s
  Given an array containing only 0s and 1s, sort it.

- Sorting
  Implement your own algorithm for sorting an array (you cannot use .sort).

- Sub-sequence sum
  Given an array of integers and a target number, find if there exist a sequence of numbers that sum up to the target.

  For example:

| array | target | expected return |
|-------|--------|--------------|
|`[10,3,1,7]`|`8`| should return `true` (because 1+7 = 8) |
|`[10,3,1,7]`|`10`| should return `true` (because 10 is in the array) |
|`[10,3,1,7]`|`21`| should return `true` (because the sum of the whole array return 21) |
|`[10,3,1,7]`|`22`| should return `false` (because you can't reach 22 by summing all numbers) |
|`[10,3,1,7]`|`17`| should return `false` (because 10 and 7 are not next to each other) |


### Find Duplicates

Given a list of words, find all words that appear more than once.

Todays workshop was around the steps needed to create an algorithm, these steps included:
- Describe the problem (sometimes a diagram helps)
- Create test cases.
- Think about how you would do this, given this task in real life.
- Write down each step in plain english
- If it is possible directly, translate each of the steps into code
- Otherwise, think about each step separately, and repeat 3 to 6.
- Once everything is translated to code, run your testcases.

I have copied the process into duplicate.js , where my duplicate method is. I ran the method on sample arrays to ensure the output was what I had expected. Once satisfied I timed the function on larger sized arrays, all of which had a mixture of randomly selected numbers between a range of 1 and 99.

I also ran the same process on a duplicate method which had been recommended online. The function can be found in duplicate2.js . The results are below:

The following chart is of a small sample array of 25 numbers, all ranging between 1-9.

![Small sample](https://user-images.githubusercontent.com/37640287/49450561-2a070d00-f7d5-11e8-85a1-e2cb76f8c91b.png)


The difference between the two methods is very clear once dealing with larger arrays.  

![Chart comparing the two methods](https://user-images.githubusercontent.com/37640287/49450586-3e4b0a00-f7d5-11e8-905a-d2c16e768cec.png)


My method took a considerable amount longer to run through its function due to the amount of steps and loops it was asked to perform. Plus the code is very messy and not dry , however it is a starting point and something that can be worked on.
