function MaximumDiff(arr) {
  const leftSmaller = [];
  const rightSmaller = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    leftSmaller[i] = 0;
    rightSmaller[i] = 0;
  }

  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length > 0) {
      leftSmaller[i] = arr[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  while (stack.length > 0) {
    stack.pop();
  }

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length > 0) {
      rightSmaller[i] = arr[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  let maxDiff = -1;

  for (let i = 0; i < n; i++) {
    const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
}

// Example 1:
const arr1 = [2, 1, 8];
console.log(MaximumDiff(arr1));
// Example 2:
const arr2 = [4, 7, 5, 6, 3, 8, 2];
console.log(MaximumDiff(arr2)); 
// Example 3:
const arr3 = [5, 1, 9, 2, 5, 1, 7];
console.log(MaximumDiff(arr3));