"use strict";
// DOCUMENT ELEMENTS
const inputData = document.getElementById("toDoInput");
const addBtn = document.getElementById("addBtn");
const listingData = document.querySelector(".list-data");

// CREATING HTML ELEMENTS:
const ul = document.createElement("ul");
const li = document.createElement("li");
const h3 = document.createElement("h3");

// ADDING TASK FUNCTION
const addTask = function () {
  ul.classList.add("ul-list");
  ul.appendChild(li);
  li.appendChild(h3);
  h3.innerText = inputData.value;
  listingData.appendChild(ul);

  inputData.value = "";
};

h3.style.cursor = "pointer";
addBtn.addEventListener("click", addTask);

h3.addEventListener("dblclick", function () {
  h3.style.textDecoration = "line-through";

  setTimeout(function () {
    li.style.listStyle = "none";
    h3.innerText = "";
  }, 1000);
});
