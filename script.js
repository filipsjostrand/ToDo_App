// Code from GreatStack: https://www.youtube.com/watch?v=G0jO8kUrg-I

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add todo (empty input field)
function addTask() {
  if (inputBox.value === "") {
    alert("You must write a todo text!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    span.className = "delete-todo-cross"
  }
  inputBox.value = '';
  saveData()
}

// Todo onclick: Toggle checked/unchecked (todo), span onclick: remove todo
listContainer.addEventListener("click", function(e) {
  if(e.target.tagName  === "LI") {
  e.target.classList.toggle("checked");
  saveData()
} else if(e.target.tagName ==="SPAN"){
  e.target.parentElement.remove();
  saveData()
}
}, false);

// Save todo-data to localStorage
function saveData() {
  localStorage.setItem("brainstorm-data", listContainer.innerHTML)
}

// Get todo-data from localStorage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("brainstorm-data");
}
showTask();