function reverseN(N) {
  const stack = [];
  const digits = N.toString().split("");

  for (let digit of digits) {
    stack.push(digit);
  }

  let reversedN = "";

  while (stack.length > 0) {
    reversedN += stack.pop();
  }

  return parseInt(reversedN);
}

// Example usage:
const N1 = 365;
console.log(reverseN(N1));

const N2 = 6899;
console.log(reverseN(N2));

