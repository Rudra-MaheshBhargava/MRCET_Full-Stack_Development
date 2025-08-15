// prop is a read only value passed from parent to child component, a prop can be used to pass data from a parent component to a child component in React.
//<component key=value> is used to render a component in React.

function Student(props) {
  return (
    <div>
      {/* <h1 style={{ color: "blue", textAlign: "center" }}>Student Information</h1> */}
        <center>
            
            <p style={{ color: "red" }}>Name: {props.name}</p>
            <p style={{ color: "green" }}>Age: {props.age}</p>
            <p style={{ color: "purple" }}>is a student: {props.isStudent ? "Yes" : "No"}</p>
        </center>
    </div>
  );
}

export default Student;
