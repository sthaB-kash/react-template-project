import { useState, useRef, useEffect } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component rendered - useSate.");
  });

  return (
    <>
      <h2>UseState</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

const UseRefExample = () => {
  const count = useRef(0);

  const handleIncrement = () => {
    count.current++;
    console.log(count.current);
  };

  useEffect(() => {
    console.log("Component rendered - useRef.")
  });
  
  return(
    <>
        <h2>useRef()</h2>
        <p>Count: {count.current}</p>
        <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

const UseRefvsUseState = () => {
  return (
    <div>
      <h1>UseRefvsUseState</h1>
      <UseStateExample />
      <UseRefExample/>
      <hr/>
    </div>
  );
};

export default UseRefvsUseState;
