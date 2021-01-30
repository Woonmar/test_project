import { useState } from "react";

const Counter = () => {

  const [num, setNum] = useState(1);

  function increment() {
    setNum(num + 1);
  }

  function decrement() {
    setNum(num - 1);
  }

  return ( 
    <div className="container">
      <h4 className="p-3">{num}</h4>
      <button className="btn btn-primary p-2 m-3" onClick={increment}> Increment </button>
      <button className="btn btn-warning p-2 m-3" onClick={decrement}> Decrement </button>
    </div>
   );
}
 
export default Counter;