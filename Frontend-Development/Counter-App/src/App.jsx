import { useState } from "react";
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
    else return;
  }

  const resetCount = () => {
    setCount(0);
  }

  return(
    <>
    <h1 id = "heading">Welcome to EK's Counter App !</h1>
    <div className="counter-container">
      <h1>Count: {count}</h1> <br></br>
      <div className="buttons">
        <button className="increment-button" onClick={incrementCount}>Increment</button>
        <button className="decrement-button" onClick={decrementCount}>Decrement</button>
        <button className="reset-button" onClick={resetCount}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App