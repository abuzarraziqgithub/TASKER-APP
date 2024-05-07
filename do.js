"use strict";
/*
1-> SELECTED HTML ELEMENTS.
2-> CREATED A FUNCTION.
3-> CREATED HTML ELEMEENTS.
4-> CREATED EVENT LISTENER FOR ADD BUTTON
5-> PUUTING INPUT DATA INTO H3
*/

// SELECTING HTML HEADER ELEMENTS.
const inputSection = document.getElementById("main-input");
const cancelBtn = document.getElementById("cancel-btn");
const addBtn = document.getElementById("add-Btn");
const listPDiv = document.querySelector(".list-parent-div");

addBtn.addEventListener("click", function () {
  // CREATING HTML CONTENT ELEMENTS
  listPDiv.classList.add("list-parent-div");
  // CHECKBOX
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.classList.add("content-checkbox");
  // PARENT DIV OF H3
  const paragDiv = document.createElement("div");
  paragDiv.classList.add("text-content");
  // H3 TEXT
  const h3 = document.createElement("h3");
  h3.classList.add("h3-text");
  // DELETE BTN
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("content-delete-btn");
  const span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.innerHTML = "delete";

  if (inputSection.value) {
    h3.innerText = inputSection.value.trim();
    listPDiv.appendChild(checkBox);
    listPDiv.appendChild(paragDiv);
    paragDiv.appendChild(h3);
    listPDiv.appendChild(deleteBtn);
    deleteBtn.appendChild(span);
  } else {
    alert("Please enter Your Task");
  }
});

// CLEAR VALUE OF THE INPUT BY CLICKING ON CANCEL BTN
cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputSection.value = "";
});

// DELETING CONTENT:
deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contenParent.style.display = "none";
});

// TASK COMPLETED
checkBox.addEventListener("change", function (e) {
  e.preventDefault();
  h3.style.textDecoration = "line-through";
  setTimeout(() => {
    checkBox.style.display = "none";
  }, 1500);
});
