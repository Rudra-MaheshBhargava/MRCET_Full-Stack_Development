// Change page title and background
document.title = "DOM Manipulation Example";
document.body.style.backgroundColor = "lightblue";

// Change existing heading and paragraph
document.getElementById("Head1").innerHTML = "Hello, World!";
document.getElementById("Para1").innerHTML = "Welcome to DOM Manipulation";

// Style second h1
document.getElementsByTagName("h1")[1].style.color = "blue";

// Style elements by class name
let mahesh=document.getElementsByClassName("ds");
mahesh[0].style.color = "Red";
mahesh[1].style.color = "Green";
mahesh[2].style.color = "Yellow";
mahesh[3].style.color = "Orange";

// document.getElementsByClassName("ds")[1].style.color = "Green";
// document.getElementsByClassName("ds")[2].style.color = "Yellow";
// document.getElementsByClassName("ds")[3].style.color = "Orange";

