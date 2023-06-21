function reverseKElements(queue, k) {
  const stack = [];

  for (let i = 0; i < k; i++) {
    stack.push(queue.shift());
  }

  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  for (let i = 0; i < queue.length - k; i++) {
    queue.push(queue.shift());
  }
}

// Example usage:
const queue1 = [10, 20, 30, 40, 50];
reverseKElements(queue1, 3);
console.log(queue1); 


