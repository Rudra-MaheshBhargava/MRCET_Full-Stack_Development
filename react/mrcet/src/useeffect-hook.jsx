// useEffect => A React Hook that lets you perform side effects in function components. It can be used to fetch data, directly interact with the DOM, and more. It runs after the render is committed to the screen.

// useEffect()= React Hook that tells React DO SOME CODE WHEN (pick one):
// 1. After the first render or when the component mounts
// 2. After every render or when the component updates
// 3. When the component unmounts

// useEffect(function, [dependencies]);
// function: The code to run after the render is committed to the screen.
// dependencies: An array of values that the effect depends on. If any of these values change, the effect will run again.

// useEffect(() => {}) //Runs after every render
// useEffect(() => {}, []) //Runs only after the first render or runs only on mount
// useEffect(() =>{},[value]) // runs on mount and when the value changes

// used in 
// 1. Data fetching
// 2. Directly interacting with the DOM
// 3. Setting up a subscription
// 4. Manually changing the DOM
// 5. Running cleanup code when the component unmounts

import React, { useState, useEffect } from "react";

function Mycomponent1(){
const [count, setCount] = useState(0);

useEffect(() => {
    document.title = `Count: ${count}`;
}, [count]);

function increment() {
    setCount(count + 1);
}
function decreament() {
    if (count > 0) {
        setCount(count - 1);
    }
    // else {
    //     alert("Count cannot be less than zero");
    // }
}
function reset() {
    setCount(0);
}

return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decreament}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <p>Check the document title to see the effect of useEffect</p>
        </div>
);
}
export default Mycomponent1;
