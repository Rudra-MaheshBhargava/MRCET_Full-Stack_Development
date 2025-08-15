// conditional rendering in react, we can use if-else statements, ternary operators, or logical && operator. it helps to render components based on certain conditions, and allows you to control what gets displayed in the UI based on the state or props of your components.

import React from 'react';
// using if-else statement

function Greeting(name) {
    if (name.isloggedin) {
        return <h1>Welcome, {name.user}!</h1>;
    } else {
        return <h1>Please log in. {name.user}</h1>;
    }
}

// using ternary operator

// function Greeting(name){
//     return (name.isloggedin ?
//         <h1>Welcome, {name.user}!</h1> :
//         <h1>Please log in.</h1>
//     );

// }

export default Greeting;