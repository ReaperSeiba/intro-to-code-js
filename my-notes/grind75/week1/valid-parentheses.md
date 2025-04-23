# Valid Parentheses

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
