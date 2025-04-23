# Grind 75 - Week 1

- [Grind 75 - Week 1](#grind-75---week-1)
  - [Problems](#problems)
    - [Two Sum](#two-sum)
    - [Valid Parentheses](#valid-parentheses)
    - [Best Time to Sell Stock](#best-time-to-sell-stock)

## Problems

### Valid Parentheses

> Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
>
> An input string is valid if:
>
>     Open brackets must be closed by the same type of brackets.
>     Open brackets must be closed in the correct order.
>     Every close bracket has a corresponding open bracket of the same type.

You need to figure out what the condition for a invalid combination.
Therefore, you need to track what you've seen so far.

```ts
function isValid(s: string) {
  // Detail what the closing bracket requires to be valid
  const bracketPairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // const base = "()"; valid
  // ( > isClosing? no, stack (
  // ) > isClosing? yes, take ( out from stack
  //    check, if match, continue

  // "([" invalid
  // ( > isClosing? no, stack (
  // [ > isClosing? no, stack ([

  // Helper to determine is current character is a CLOSING bracket
  const isClosingBracket = (char: string): boolean => char in bracketPairs;

  // Track what we've seen so far in a way that lets us remove completed pairs
  const stack: string[] = [];

  // Iterate over input string
  for (const char of s) {
    // Is this a closing bracket or an opening one?
    if (isClosingBracket(char)) {
      // If so, remove and store the last thing on the stack
      const opening = stack.pop();

      // Does the value of opening, correspond to the key of closing?
      if (bracketPairs[char] !== opening) {
        // If the values DO NOT align, its invalid.
        return false;
      }

      // Not false, go next char
    } else {
      // This is an opening character, let's wait to see if we get its closing char
      stack.push(char);
    }
  }

  // If the stack still has items, it is NOT valid.
  // Otherwise, it is.
  return stack.length === 0;
}
```

### Best Time to Sell Stock

**Dynamic Programming**

```ts
function maxProfit(prices: number[]): number {
  // We don't know what the min is?
  let minPrice = Number.POSITIVE_INFINITY;
  let maxProfit = 0;

  for (const currPrice of prices) {
    minPrice = Math.min(currentPrice, minPrice);
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
  }

  return maxProfit;
}
```

**Sliding Window aka Two Pointers**

```
  if prices is empty OR length of prices < 2 then
      return 0
  end if

  // Initialize variables
  max_profit = 0
  left_buy = 0          // Buy pointer
  right_sell = 1        // Sell pointer

  // Continue while we have prices to compare
  while right_sell < length of prices do
      current_price = prices[right_sell]
      buy_price = prices[left_buy]

      // If profitable trade found
      if buy_price < current_price then
          current_profit = current_price - buy_price
          max_profit = MAXIMUM(max_profit, current_profit)
      else
          // Update buy pointer if we find a lower price
          left_buy = right_sell
      end if

      // Move sell pointer to next day
      right_sell = right_sell + 1
  end while

  return max_profit
```

```ts
function maxProfit(prices: number[]): number {
  if (!prices || prices.length < 2) {
    return 0;
  }

  let maxProfit = 0;
  let leftBuy = 0;
  let rightSell = 1;

  while (rightSell < prices.length) {
    const currentPrice = prices[rightSell];
    const buyPrice = prices[leftBuy];

    if (buyPrice < currentPrice) {
      const currentProfit = currentPrice - buyPrice;
      maxProfit = Math.max(maxProfit, currentProfit);
    } else {
      leftBuy = rightSell;
    }

    rightSell++;
  }

  return maxProfit;
}
```
