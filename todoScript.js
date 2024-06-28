let todoInput = document.getElementById("input-box-v2");

const maxElements = 3;
let limitedTodoSet = new Set();
// let currentTodoSet = new Set();

function resetAllTodos() {
  limitedTodoSet = new Set();
  console.log("[...limitedTodoSet] = " + [...limitedTodoSet]);
}

// resetAllTodos();



function addTaskToSet() {
  if (todoInput.value === "") {
    alert("You must write a todo text!");
  }
  if (limitedTodoSet.size < maxElements) {
    limitedTodoSet.add(todoInput.value);
    // console.log(`${todoInput.value} added`);
    console.log("[...limitedTodoSet] = " + [...limitedTodoSet]);
  } else {
    console.log("Current Todo limit (3) is reached.");
  }
}