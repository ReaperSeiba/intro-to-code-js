# Two Sum

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
>
> You may assume that each input would have exactly one solution, and you may not use the same element twice.
>
> You can return the answer in any order.

Instead of juggling two number, think of a way to use just one.

Simply put, when you examine a number is there a number that gives the target number's **complement**?

```ts
// Track complement (other) number we need for any given array num
// Track the index of the complement

var twoSum = function (nums: number[], targetNum: number) {
  // Store the relationship between currNum and index TOGETHER
  let numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    // What is the number we need right now?
    const complement = targetNum - currNum;

    // Does the map contain the complement of current num?
    if (numMap.has(complement)) {
      // Complement exists, grab its corresponding value
      const complementIndex = numMap.get(complement);

      // Use that value and format your return
      return [complementIndex, i];
    }

    // Tell the Map, "you have the currNum at this index"
    numMap.set(currNum, i);
  }

  // No solution found
  return [];
};
```
