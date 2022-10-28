# Mr. Roboger's Neighborhood
### A project by Aitana Shough

#### Tests
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

Test: It will replace two-digit numbers in the array containing 1 with the string "Beep!"
Code: beepBoop(11);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"]
```