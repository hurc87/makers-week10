# Algorithmic Complexity

## Learning objectives
By the end of this week, the goal is to be able to answer "yes" to these questions:

- Can you mention efficiency as one of the dimension of a good piece of code
- Can you join a conversation about algorithms and their complexity?

### Timing code
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


I chose to work in javascript and althought there are ways to perform a shuffle, there is no .shuffle method already setup like there is in ruby. I used the following function to perform a shuffle on the arrays before the timer was set:


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



### Shuffle method

The graph for the shuffle method:


![Shuffle method Chart](https://user-images.githubusercontent.com/37640287/49387935-e8199080-f71a-11e8-8daa-02874a7d248a.png)


### Last method

The graph for the last method:


![Last method Chart](https://user-images.githubusercontent.com/37640287/49388023-0aaba980-f71b-11e8-9845-363251038973.png)


### Reverse method

The graph for the reverse method:


![Reverse method Chart](https://user-images.githubusercontent.com/37640287/49387989-fbc4f700-f71a-11e8-9dd8-367b5824298f.png)


### Sort method

The graph for the sort method:


![Sort method Chart](https://user-images.githubusercontent.com/37640287/49387889-d3d59380-f71a-11e8-97b5-2dced969188d.png)


### Comparing the results

Once I was happy each of the methods and timer was working I ran each method on different sized arrays, running each one 10 times, then taking the total to put on the final graph.


### The final table of averages:


![Total table map](https://user-images.githubusercontent.com/37640287/49387674-5b6ed280-f71a-11e8-806f-16e18138ea9b.png)
