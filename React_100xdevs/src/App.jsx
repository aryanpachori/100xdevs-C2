import { useMemo } from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputval, setInputval] = useState(1);

  let finalcount = useMemo(()=>{
    let sum = 0;
    for (let i = 0; i < inputval; i++) {
      sum = i + sum;
    }
    return sum
  },[inputval]) 
  return (
    <div>
      <input
        onChange={(e) => {
          setInputval(e.target.value);
        }}
        placeholder="enter the number"
      ></input>
      <br />
      <label>
        Sum from 1 to {inputval} is {finalcount}
      </label>
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        counter ({counter})
      </button>
    </div>
  );
}

export default App;
