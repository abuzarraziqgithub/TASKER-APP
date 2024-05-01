"use strict";
// DOCUMENT ELEMENTS
const inputData = document.getElementById("toDoInput");
const addBtn = document.getElementById("addBtn");
const listingData = document.querySelector(".list-data");

// ADDING TASK FUNCTION
const addTask = function () {
  // Creating new <ul> element for each task
  const ul = document.createElement("ul");
  ul.classList.add("ul-list");

  // Creating <li> and <h3> elements
  const li = document.createElement("li");
  const h3 = document.createElement("h3");

  // Setting the text content
  h3.innerText = inputData.value;

  // Appending elements
  li.appendChild(h3);
  ul.appendChild(li);
  listingData.appendChild(ul);

  // Clear input field
  inputData.value = "";
};

addBtn.addEventListener("click", addTask);

// Event listener to mark task as completed
listingData.addEventListener("dblclick", function (event) {
  const target = event.target;
  if (target.tagName === "H3") {
    target.style.textDecoration = "line-through";
    setTimeout(function () {
      target.parentNode.style.display = "none"; // Hide the task after completion
    }, 1000);
  }
});

/* TODAY'S OUTCOMES:

-> I CREATED 3 HTML ELEMENTS , UL LI AND H3,
-> I CREATED A FUNCTION.
-> I ADDED THE CLASS TO UL.
-> I APPEND THE CHILD INSIDE UL AND UL INSIDE THE LIST DIV.

*/
