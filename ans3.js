function deleteMiddleElement(stack) {
  if (stack.length === 0) {
    return;
  }

  const middleIndex = Math.floor(stack.length / 2);

  if (stack.length % 2 === 0) {
    stack.splice(middleIndex - 1, 1);
  } else {
    stack.splice(middleIndex, 1);
  }
}

// Example1:
const stack1 = [1, 2, 3, 4, 5];
deleteMiddleElement(stack1);
console.log(stack1);
// Example2:
const stack2 = [1, 2, 3, 4, 5, 6];
deleteMiddleElement(stack2);
console.log(stack2);
