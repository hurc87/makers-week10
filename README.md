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

![Small table map](https://user-images.githubusercontent.com/37640287/49507959-7a37ab00-f879-11e8-8c19-215f79428c5d.png)



### Shuffle method

The graph for the shuffle method:

![Shuffle method Chart](https://user-images.githubusercontent.com/37640287/49507719-f41b6480-f878-11e8-8f37-eb77221743ea.png)


### Last method

As there is no .last in javascript, so I used the following code:

        function last(newArray) {

          var last = newArray[newArray.length - 1]

          return last

        };

The graph for the last method:

![Last method Chart](https://user-images.githubusercontent.com/37640287/49507790-18774100-f879-11e8-9990-3b5f12baee7c.png)


### Reverse method

The graph for the reverse method:

![Reverse method Chart](https://user-images.githubusercontent.com/37640287/49507764-05fd0780-f879-11e8-82b4-a9b26e66dcb1.png)


### Sort method

The graph for the sort method:

![Sort method Chart](https://user-images.githubusercontent.com/37640287/49507662-da7a1d00-f878-11e8-95be-e4f2a25ba505.png)



## Build your own algorithms

The challenge is now to build our own algorithms for the following functions:

- Shuffling
  Implement your own algorithm for shuffling (you cannot use .shuffle).

- Mechacoach Pairing
  Given a list of students names, create all possible pairings.

-  Most frequent words
  Given a text, find which are the ten most common words.

- Sorting
  Implement your own algorithm for sorting an array (you cannot use .sort).

- Two different sorting algorithms (one of the quadratic and one of the divide and conquers

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

I have copied the process into duplicate.js , where my duplicate method is. I ran the method on sample arrays to ensure the output was what I had expected. Once satisfied I timed the function on larger sized arrays. At first I made the arrays have a random mixture of numbers between 1 and 100, however I was advised to change this to an array with no duplicates as this would mean the function would run for a longer period of time.  

I also ran the same process on a duplicate method which had been recommended online. The function can be found in duplicate2.js . The results are below:

The following graph shows my results compared to the results for the secind method:

![Duplciate method line graph](https://user-images.githubusercontent.com/37640287/49520999-59348180-f89c-11e8-86a4-61347b768102.png)


There is a massive difference in the time my function took to run compared to the second version. Due to the huge difference in time the second line looks like it has not moved at all! Below is the results for arrays up to 25000 items.

![Duplcate method small line graph](https://user-images.githubusercontent.com/37640287/49521027-66ea0700-f89c-11e8-9b8e-6e4a301bbbfc.png)


### Reversing

Implement your own algorithm for reversing an array (you cannot use .reverse).

![Reverse DIY version vs the .reverse](https://user-images.githubusercontent.com/37640287/49525777-62c2e700-f8a6-11e8-8aea-8d2d1401bc29.png)

### Sorting 0s and 1s

Given an array containing only 0s and 1s, sort it.

![Sorting 0s and 1s vs sort()](https://user-images.githubusercontent.com/37640287/49591239-cc55fa80-f965-11e8-9f88-ce3a2cbe98ef.png)
