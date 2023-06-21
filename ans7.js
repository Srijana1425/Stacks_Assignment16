function RemainingWords(S) {
  const stack = [];

  for (let word of S) {
    if (stack.length > 0 && stack[stack.length - 1] === word) {
      stack.pop();
    } else {
      stack.push(word);
    }
  }

  return stack.length;
}

// Example 1:
const S1 = ["ab", "aa", "aa", "bcd", "ab"];
console.log(RemainingWords(S1)); 
// Example 2:
const S2 = ["tom", "jerry", "jerry", "tom"];
console.log(RemainingWords(S2)); 
