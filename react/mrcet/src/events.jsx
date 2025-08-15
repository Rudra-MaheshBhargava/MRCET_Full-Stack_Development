import React from 'react';

// Click event
export function Events() {
    const handleClick = () => alert('Button clicked!');
    return <button onClick={handleClick}>Click Me</button>;
}

// Double Click
export function DoubleClickEvent() {
    const handleDoubleClick = () => alert('Button double clicked!');
    return <button onDoubleClick={handleDoubleClick}>Double Click Me</button>;
}

// Mouse Enter
export function MouseInEvent() {
    const handleMouseEnter = () => alert('Mouse entered!');
    return <button onMouseEnter={handleMouseEnter}>Hover Over Me</button>;
}

// Mouse Leave
export function MouseOutEvent() {
    const handleMouseLeave = () => alert('Mouse left!');
    return <button onMouseLeave={handleMouseLeave}>Hover Out Me</button>;
}

// Keyboard Event
export function KeyboardEvent() {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            alert('Enter key pressed!');
        }
    };
    return <input type="text" onKeyPress={handleKeyPress} placeholder="Press Enter" />;
}

// keyboard events
export function KeyDownEvent() {
    const handleKeyDown = (event) => {
        alert(`Key down: ${event.key}`);
    };
    return <input type="text" onKeyDown={handleKeyDown} placeholder="Press any key" />;
}

