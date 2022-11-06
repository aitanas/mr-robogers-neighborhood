# Mr. Roboger's Neighborhood
### A project by Aitana Shough

##### Mr. Roboger's Neighborhood is a JavaScript application where the user inputs a number and receives a message from Mr. Roboger himself. The message is an array counting from 0 to the inputted number, only Mr. Roboger cannot say the numbers 1, 2, or 3! Instead, he says *Beep!*, *Boop!* or *Won't you be my neighbor?*.

###### This silly application was created for Epicodus's third independent project."

## Technologies Used

* JavaScript
* HTML / CSS
* Bootstrap
* Git

## Setup/Installation Requirements

This project may be viewed online via the corresponding [**GitHub pages site**](https://aitanas.github.io/mr-robogers-neighborhood/).

Alternatively, you may clone this project to your local machine by using the following command:
```
git clone https://github.com/aitanas/mr-robogers-neighborhood.git
```
Directions after cloning are as follows:
1. Open the **mr-robogers-neighborhood** directory.
2. Open the file named **index.html** with an internet browser (i.e. Google Chrome) of your choice.
3. Enjoy!

## Tests
```
Describe beepBoop()
Test: It will return an array of numbers, counting from 0 to the user's inputted number.
Code: beepBoop(10);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Test: It will replace 1, in a single-digit array, with the string "Beep!"
Code: beepBoop(4);
Expected Output: [0, "Beep!", 2, 3, 4]

Test: It will also replace 2, in a single-digit array, with the string "Boop!"
Code: beepBoop(4);
Expected Output: [0, "Beep!", "Boop!", 3, 4]

Test: It will finally replace 3, in a single-digit array, with the string "Won't you be my neighbor?"
Code: beepBoop(4);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4]

Test: It will replace one-digit AND two-digit numbers in the array containing 1 with the string "Beep!"
Code: beepBoop(11);
Expected Output: [0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"]

Test: It will replace one-digit AND two-digit numbers in the array with "Beep!", "Boop!", and "Won't you be my neighbor?" for integers containing 1, 2, and 3, respectively.
Code: beepBoop(13);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]

Test: It will replace one-digit, two-digit, AND three-digit numbers in the array with "Beep!", "Boop!", and "Won't you be my neighbor?" for integers containing 1, 2, and 3, respectively.
Code: beepBoop(103);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4 ... 99, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]
```

## Known Bugs

- None at this moment.

## License

**MIT License**

Copyright (c) 2022 Aitana Shough

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.