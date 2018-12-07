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


I chose to work in javascript and although there are ways to perform a shuffle, there is no shuffle method already setup like there is in ruby. I used the following function to perform a shuffle on the arrays before the timer was set:


        function shuffle(array) {

          for (var i = array.length-1; i >=0; i--) {

              var randomIndex = Math.floor(Math.random()\**(i+1));
              var itemAtIndex = array[randomIndex];

              array[randomIndex] = array[i];
              array[i] = itemAtIndex;
          }
          return array;

        };


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

The following graph shows my results compared to the results for the second method:

![Duplciate method line graph](https://user-images.githubusercontent.com/37640287/49520999-59348180-f89c-11e8-86a4-61347b768102.png)



There is a massive difference in the time my function took to run compared to the second version. Due to the huge difference in time the second line looks like it has not moved at all! Below is the results for arrays up to 25000 items.

![Duplcate method small line graph](https://user-images.githubusercontent.com/37640287/49521027-66ea0700-f89c-11e8-9b8e-6e4a301bbbfc.png)



### Reversing

Implement your own algorithm for reversing an array (you cannot use .reverse).

![Reverse DIY version vs the .reverse](https://user-images.githubusercontent.com/37640287/49525777-62c2e700-f8a6-11e8-8aea-8d2d1401bc29.png)



### Sorting 0s and 1s

Given an array containing only 0s and 1s, sort it (without using .sort).

![Sorting 0s and 1s vs sort()](https://user-images.githubusercontent.com/37640287/49591239-cc55fa80-f965-11e8-9f88-ce3a2cbe98ef.png)



### Build a divide and conquer method to sort an array

Divide-and-conquer, breaks a problem into subproblems that are similar to the original problem, recursively solves the subproblems, and finally combines the solutions to the subproblems to solve the original problem.
We worked in pairs as part of this workshop to create a way to break the challenge down into smaller challenges in order to sort the whole array. With our version we break the array into sections starting with the 0 index of the array. Once each pair has been sorted we move on to step two. In step two we do the same but this time we start with the 1 index of the array.

This continues throughout the array swapping between array index 0 and array index one as the starting point for the pairing. This process is repeated for a set amount of times, the times needed to ensure the array is fully sorted is half the length of the array. So if the array has a length of 8 items, step one would need to be completed 4 times and step two would need to be completed 8 times also. Odd numbers would need to be rounds up, so if the array has 9 items in it, we would repeat each step 5 times.   

eg.

    Our test array is :
    testArray = [6, 5, 4, 3, 2, 1]

In round one step 1 we would swap array[0] which is 6 with array[1] which is 5, array[2] which is 4 would be swapped with array[3] which is 3 and array[4] the number 2 would be swapped with array[5] number 1. So after round 1, step 1 the array would now be:

    testArray = [5, 6, 3, 4, 1, 2]

Step two would be swapping array[1] (number 6) with array[2] (number 3), we would also swap array[3] (number 4) with array[4] (number 1). So our array is now:

    testArray = [5, 3, 6, 1, 4, 2]

As the array has a length of 6, we would complete 3 rounds.
So round two would look like this:

    Round 2 step 1
    testArray = [3, 5, 1, 6, 2, 4]

    Round 2 step 2
    testArray = [3, 1, 5, 2, 6, 4]

    Round 3 step 1
    testArray = [1, 3, 2, 5, 4, 6]

    Round 3 step 2
    testArray = [1, 2, 3, 4, 5, 6]

Below is a graph comparing this version of a sort method with the original sort().

![Divide and conquer vs sort](https://user-images.githubusercontent.com/37640287/49662957-1e218200-fa45-11e8-87ea-6f2bbc552af5.png)



The following graph is a closer look at the DIY version.

![Divide and conquer ](https://user-images.githubusercontent.com/37640287/49663014-427d5e80-fa45-11e8-9a35-1acfeaf6c2b5.png)



The graph below is a closer look at original sort().

![sort](https://user-images.githubusercontent.com/37640287/49662993-372a3300-fa45-11e8-9b05-ac89c58c1de8.png)



As with most of other methods I have rebuilt, my methods give a quadratic line on the graph, whereas the original versions mainly give a linear line.
