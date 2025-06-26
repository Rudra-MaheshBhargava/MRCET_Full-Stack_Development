document.body.style.backgroundColor = "lightblue";

// style elements by querySelector
document.querySelector(".dsa").style.color = "Red";

//style using queery selector all
let elements = document.querySelectorAll(".EB");
elements[0].style.color = "Red";
elements[1].style.color = "Green";
elements[2].style.color = "Blue";
elements[3].style.color = "Orange";


// Function to toggle background color
// function changeBackground() {
//     document.body.style.backgroundColor =" red";
//     alert("Background color changed to red!");
// }

// changeBackground to red and then to blue
// function changeBackground() {
//     if (document.body.style.backgroundColor === "red") {
//         document.body.style.backgroundColor = "blue";
//     } else {
//         document.body.style.backgroundColor = "red";
//     }
// }

// change of background color from red to blue using ternary operator
function changeBackground() {    
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "red" : "yellow";  
    // alert("Background color changed!");
}

function changetext(){
    document.getElementById("clg").innerHTML = "VIT,IIT-HYDERABAD";
     document.getElementById("clg").style.backgroundColor = "coral";

   document.getElementById("clg").style.color = "white";
    document.getElementById("clg").style.fontSize = "30px";
    document.getElementById("clg").style.textAlign = "center";
    document.getElementById("clg").style.padding = "20px";
    document.getElementById("clg").style.borderRadius = "10px";     
}
