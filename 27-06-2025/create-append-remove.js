// // Create - Append - Remove Elements Example in JavaScript

let aish=document.createElement("p");  // Create a new paragraph element

// aish.textContent="I'm Chitti";  // Set the text content

aish.innerHTML="Memory 1 Tera Byte";  // Set the inner HTML

aish.style.color="blue";
aish.style.fontSize="20px";
document.getElementById("vasi").appendChild(aish); // Append it to the container div


let sana=document.getElementsByClassName("list")[0];
if(sana){
  sana.remove();
}
// // Remove element example: remove the first .info paragraph after 3 seconds
setTimeout(() => {
  let re = document.getElementsByClassName("list")[3];
  if (re) {
    re.remove();  // Remove the first .info paragraph
  }
}, 2000);

// // Create a new heading
let newHeading = document.createElement("h2");
newHeading.innerHTML = "This is a new heading added by JavaScript!";  // Set the inner HTML
newHeading.style.color = "purple";
newHeading.style.fontSize = "24px";  // Set the font size
document.body.appendChild(newHeading);  // Append the new heading to the body

// Appen the text after 3 seconds
setTimeout(() => {
  let newText = document.createElement("p");
  newText.textContent = "This text is added after 3 seconds!";
  newText.style.color = "green";
  document.body.appendChild(newText);
}, 3000);

// Append text to tag
let tagText = document.createElement("p");
tagText.textContent = "This text is appended to the tag!";
tagText.style.color = "orange";
document.getElementById("vasi").appendChild(tagText);  // Append the text to the tag element

// Create a list, add items, and remove one
let list = document.createElement("ul");  // Create a new unordered list
for (let i = 1; i <= 3; i++) {
  let listItem = document.createElement("li");  // Create a new list item
  listItem.textContent = `Item ${i}`;  // Set the text content
  list.appendChild(listItem);  // Append the list item to the list
}
  document.body.appendChild(list);  // Append the list to the body