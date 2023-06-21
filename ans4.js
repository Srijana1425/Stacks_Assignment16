function Arrangedinincreasingorder(queue) {
  const stack = [];
  let expected = 1;

  while (queue.length > 0) {
    if (queue[0] === expected) {
      queue.shift();
      expected++;
    } else if (stack.length > 0 && stack[stack.length - 1] === expected) {
      stack.pop();
      expected++;
    } else {
      stack.push(queue.shift());
    }
  }

  while (stack.length > 0 && stack[stack.length - 1] === expected) {
    stack.pop();
    expected++;
  }

  return stack.length === 0;
}

// Example1:
const queue1 = [5, 1, 2, 3, 4];
console.log(Arrangedinincreasingorder(queue1));
 
// Example2:
const queue2 = [5, 1, 2, 6, 3, 4];
console.log(Arrangedinincreasingorder(queue2));