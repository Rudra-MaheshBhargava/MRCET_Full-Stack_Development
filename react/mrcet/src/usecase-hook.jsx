// hooks : Special Function that allows functional components to use state and other React features without writing a class component (React 16.8+)
// (Hooks are functions that let you “hook into” React state and lifecycle features from function components.)
// (usestate, useEffect,useRef)

// usestate => A React Hook that allows the creation of state variables in functional components.A setter function to update its value in the virtual DOM.


import React,{useState} from "react";

function Mycomponent(){
    const [name, setName] = useState("your Name");

    const [age,setAge]= useState(21);

    const[isEmployed,setIsEmployed]=useState(false);

    const changeName = () => {
        setName("Mahesh");
    }

    const changeAge=()=>{
        setAge(age+1);
    }

    const Employedstatus=()=>{
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={changeName}>Click Me!!</button>

            <p>Age: {age}</p>
            <button onClick={changeAge}>my Age</button>

            <p>isEmployed: {isEmployed ? "yes":"no"}</p>
            <button onClick={Employedstatus}>Yes/no</button>
            
        </div>
    );
}

export default Mycomponent;