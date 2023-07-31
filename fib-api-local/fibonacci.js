function fibonacci(n) {
    if ((typeof n) !== 'number' || n <= 0) {
      throw new Error('Invalid input. n must be a positive integer.');
    }
    //初期値の処理
    else if (n === 1) {
      return 1n;
    }
    else if (n === 2) {
      return 1n;
    }
    else {
        let prev = 1n;
        let current = 1n;
      
        for (let i = 3; i <= n; i++) {
          const next = prev + current;
          prev = current;
          current = next;
        }
        return current;
    }

  }
  
  module.exports = fibonacci;
  