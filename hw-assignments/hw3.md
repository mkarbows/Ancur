##### 7.1 The greatest common divisor (GCD) of two integers is the largest integer that evenly divides them both. For example, the GCD of 84 and 36 is 12, because 12 is the largest integer that evenly divides both 84 and 36. (Don't worry about the code if you can't understand it. Just focus on the comments.)(Hint: It should take you only a few seconds to fix these comments. Don't make a career out of it.)  
Basically all of the comments can be deleted, and a comment at the top of the file can be added with the link to the wikipedia page explaining the algorithm.  

##### 7.2 Under what two conditions might you end up with the bad comments shown in the previous code?  
The programmer may have used a top-down design to get to its logical conclusion where the code is described in great detail. The programmer could have also just added the comments after writing the code, and didn't realize they were basically just saying what each line did even if it was already obvious.  

##### 7.4 How could you apply offensive programming to the modified code you wrote for exercise 3? [Yes, I know that problem wasn't assigned, but if you take a look at it you can still do this exercise.]  
Based on problem 3, the validation code needed would validate the inputs and the results, and the *Debug.Assert* method would throws an exception if there is a problem. Therefore, the code is already pretty offensive.  

##### 7.5 Should you add error handling to the modified code you wrote for Exercise 4?  
Error handling code doesn't really need to be added here, because the code already throws any exceptions and they are passed up to the calling code so that they can be handled there.  

##### 7.7 Using top-down design, write the highest level of instructions that you would use to tell someone how to drive your car to the nearest supermarket. (Keep it at a very high level.) List any assumptions you make.  
a. walk to car
b. unlock the car
c. start the car
d. pull out of driveway
e. take a right, then next left, then immediate right, right again
f. enter supermarket parking lot
g. park your car and get out and go to the store
The assumptions made were:
a. the car was parked in a driveway with the front of the car facing the street
b. the car has gas
c. the mirror and seats are already adjusted
d. there are empty parking spaces in the parking lot
e. the supermarket is open  

##### 8.1 Suppose you've written an efficient IsRelativelyPrime method that takes two integers between -1 million and 1 million as parameters and returns true if they are relatively prime. Use either your favorite programming language or pseudocode (English that sort of looks like code) to write a method that tests the IsRelativelyPrime method. (Hint: You may find it useful to write another method that also tests two integers to see if they are relatively prime.)  
<!-- TODO -->

##### 8.3 What testing techniques did you use to write the test method in Exercise 1? (Exhaustive, black-box, white-box, or gray-box?) Which ones could you use and under what circumstances? [Please justify your answer with a short paragraph to explain.]  
<!-- TODO -->

##### 8.5 Now that you know how the method works, implement it and your testing code in your favorite programming language. Did you find any bugs in your initial version of the method or in the testing code? Did you get any benefit from the testing code?  
<!-- TODO -->

##### 8.9 Exhaustive testing actually falls into one to the categories black-box, white-box, or gray-box. Which one is it and why?  
Exhaustive tests are black-box tests because they don't rely on knowledge of what's going on inside the method they are testing  

##### 8.11 Suppose you have three testers: Alice, Bob, and Carmen. You assign numbers to the bugs so the testers find the sets of bugs {1, 2, 3, 4, 5}, {2, 5, 6, 7}, and {1, 2, 8, 9, 10}. How can you use the Lincoln index to estimate the total number of bugs? How many bugs are still at large?  
You can use Alice, Bob and Carmen to get a rough estimate of (10 + 12.5 + 20)/3 which is approximately 14 bugs. But you could assume the worst and use Bob and Carmen to get an estimate of (4 * 5)/1 which is 20 bugs.  

##### 8.12 What happens to the Lincoln estimate if the two testers don't find any bugs in common? What does it mean? Can you get a "lower bound" estimate of the number of bugs?  
If the two testers don't find any bugs then the equation for the Lincoln index divides by 0, which gives you an infinite result. So you don't know how many bugs there are. You can get a "lower bound" for the number of bugs by pretending the two testers found one bug in common.
