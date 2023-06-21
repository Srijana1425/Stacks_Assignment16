function Frequency(a) {
  const frequencies = {};
  const result = [];

  for (let i = a.length - 1; i >= 0; i--) {
    const current = a[i];
    frequencies[current] = (frequencies[current] || 0) + 1;

    let found = false;
    for (let j = i + 1; j < a.length; j++) {
      if (frequencies[a[j]] > frequencies[current]) {
        result.unshift(a[j]);
        found = true;
        break;
      }
    }

    if (!found) {
      result.unshift(-1);
    }
  }

  return result;
}

// Example1:
const a1 = [1, 1, 2, 3, 4, 2, 1];
console.log(Frequency(a1));
// Example2:
const a2 = [1, 1, 1, 2, 2, 2, 2, 11, 3, 3];
console.log(Frequency(a2));
