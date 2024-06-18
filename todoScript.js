let todoInput = document.getElementById("input-box-v2");
let currentTodoSet = new Set();

function addTaskToSet() {
    if (todoInput.value === "") {
        alert("You must write a todo text!");
      }
      else {
        console.log("todoInput = " + todoInput);
        currentTodoSet.add(todoInput.value);
        console.log("[...currentTodoSet] = " + [...currentTodoSet]);
      }
}