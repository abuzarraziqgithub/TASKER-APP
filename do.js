"use strict";
/*
1-> SELECTED HTML ELEMENTS.
2-> CREATED A FUNCTION.
3-> CREATED HTML ELEMEENTS.
4-> CREATED EVENT LISTENER FOR ADD BUTTON
5-> PUUTING INPUT DATA INTO H3
*/

// SELECTING HTML ELEMENTS.
const inputArea = document.getElementById("input-data");
const addButton = document.getElementById("addBtn");
const listingContainer = document.querySelector(".listing");
// CREATING A FUNCTION WITH THE NAME TODO.
const toDo = function () {
  // CREATING HTML UL,LI,H3
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");

  if (inputArea.value === "") {
    return inputArea.value.trim();
  }

  h3.innerHTML = inputArea.value;
  li.appendChild(h3);
  ul.appendChild(li);
  listingContainer.appendChild(ul);

  inputArea.value = "";
};

addButton.addEventListener("click", toDo);
