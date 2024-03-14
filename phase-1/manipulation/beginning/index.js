/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
console.log(document.querySelector("h1"));
console.log(document.querySelector(".address")); // . before a class name
console.log(document.querySelector("#today")); // # before an id name
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
console.log(document.querySelector("p")); // selects the first p is finds
console.log(document.querySelectorAll("p")); // selects all ps
document.querySelectorAll("p").forEach(pElement => {
    console.log(pElement);
});
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("#today").textContent);

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#today").textContent = "Today!"; // changes period . to ! 
document.querySelector("#today").style.color = "red";
// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#tomorrow").remove();
// ~ Create + Append a node
// -> createElement(), append()
const image = document.createElement("img"); // it's not add to html. To add it you need to append it
image.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcats.com%2Ffemale-cats-facts&psig=AOvVaw3BbksU7Le-nhfTzLZTcj6t&ust=1710440778893000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCND6tc7u8YQDFQAAAAAdAAAAABAE";
//document.body.append(image);
document.querySelector("#image-container").append(image); //appending to a specific element
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.


// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.

// ~ Create + Append a node
// -> createElement(), append()

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
function diplayList(h, arr){
    const heading = document.createElement("h1");
    heading.textContent = h;
    document.querySelector("#dates").append(heading);
    
    const list = document.createElement("ul");
    for (i=0; i < arr.length; i++){
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(arr[i]));
        list.appendChild(item);
    };

    arr.forEach(i => {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(i));
        list.appendChild(item);
    })

    document.querySelector("#dates").append(list)
};
diplayList("Books", ["The shining", "The shining2", "hghh"]);
// 2. Replace the <strong> element with a newly created one.
document.querySelector("strong").remove();
const image2 = document.createElement("img");
image2.src = "#"
document.querySelector("address").append(image2);
// 2. Replace the <strong> element with a newly created one.



