// fibonacci.js

function fibonacci(n) {
    if ((typeof n) !== 'number' || n <= 0) {
      throw new Error('Invalid input. n must be a positive integer.');
    }
  
    if (n === 1) {
      return 0;
    }
  
    if (n === 2) {
      return 1;
    }
  
    let prev = 0;
    let current = 1;
  
    for (let i = 3; i <= n; i++) {
      const next = prev + current;
      prev = current;
      current = next;
    }
  
    return current;
  }
  
  module.exports = fibonacci;
  