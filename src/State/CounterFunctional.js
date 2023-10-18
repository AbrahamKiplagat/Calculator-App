//At what instace can you use a functional components unlike class component.
//
import React, { useState } from 'react';

  function Counter_Functional() {
    const [count, setCount]//arrey distructuring
     = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
         Click me
        </button>
      </div>
    );
  }

  export default Counter_Functional
  /***
   * Line 1: We import the useState Hook from React. It lets us keep local state in a 
   * function component.
      Line 4: Inside the Example component, we declare a new state variable by calling the 
      useState Hook.

       It returns a pair of values, to which we give names. We’re calling our variable count 
       because it holds the number of button clicks. We initialize it to zero by passing 0 as 
       the only useState argument. The second returned item is itself a function. It lets us 
       update the count so we’ll name it setCount.
      Line 9: When the user clicks, we call setCount with a new value. React will then re-render
       the Example component, passing the new count value to it.
   */