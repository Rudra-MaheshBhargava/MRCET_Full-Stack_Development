// rendering a list of objects in react, we can use the map function to iterate over an array of objects and render each object details. this allows us to dynamically create a list of components based on the data we have.
import React from 'react'; 
import Student from './student.jsx';

function RenderList({ students }) {
    return (
        <div>
            {students.map((student, index) => (
                <Student key={index} {...student} />
            ))}
        </div>
    );
}

export default RenderList;