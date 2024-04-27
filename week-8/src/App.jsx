import { useEffect, useState } from "react";

// Define the useDebounce custom hook outside of the App component
const useDebounce = (value, delay) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
};

function App() {
  const [input, setInput] = useState('');
  const debounce = useDebounce(input, 500); // Call useDebounce at the top level of the component

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
    </div>
  );
}

export default App;

