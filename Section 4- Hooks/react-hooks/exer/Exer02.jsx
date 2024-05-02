import { useMemo } from 'react';

const Exer02 = ({ number }) => {
  // Function to calculate the nth term of the Fibonacci sequence
  const fibonacci = (n) => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  // Memoize the result of the Fibonacci sequence calculation
  const fibonacciResult = useMemo(() => fibonacci(number), [number]);

  return (
    <div>
      <h2>Exercise 02: Fibonacci Sequence</h2>
      <p>
        Fibonacci({number}) = {fibonacciResult}
      </p>
    </div>
  );
};

export default Exer02;
