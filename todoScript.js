let todoInput = document.getElementById("input-box-v2");
let todoOne = document.getElementById("todo-1");
let todoTwo = document.getElementById("todo-2");
let todoThree = document.getElementById("todo-3");
let resetTodoButton = document.querySelector(".reset-todo-button");
let newTodo = "";

// 2024-07-01,Nästa gång:
//  1. Fixa Edit-todos-funktionalitet (via rullist?)
//  2. Spara todos till localStorage (!?)

// let dropDownSelection = document.getElementById("todo-select");

const maxElements = 3;
let limitedTodoSet = new Set();

function resetTodoSet() {
  limitedTodoSet = new Set();
  todoOne.innerHTML = "1. ..."
  todoTwo.innerHTML = "2. ..."
  todoThree.innerHTML = "3. ..."
}

function addTaskToSet() {
  // console.log("addTaskToSet() körs")
  if (todoInput.value === "") {
    alert("You must write a todo text!");
  }
  if (limitedTodoSet.size === maxElements) {
    alert("Current Todo limit (3) is reached.");
  }

  if (limitedTodoSet.size < maxElements) {

    if (todoOne.innerHTML === "1. ...") {
      newTodo = "1. " + todoInput.value
      limitedTodoSet.add(newTodo);
      todoOne.innerHTML = [...limitedTodoSet][0];
      todoInput.value = "";

    } else if (todoOne.innerHTML != "1. ..." && todoTwo.innerHTML === "2. ...") {
      newTodo = "2. " + todoInput.value
      limitedTodoSet.add(newTodo);
      todoTwo.innerHTML = [...limitedTodoSet][1];
      todoInput.value = "";

    } else if (todoOne.innerHTML != "1. ..." && todoTwo.innerHTML != "2. ..." && todoThree.innerHTML === "3. ...") {
      newTodo = "3. " + todoInput.value
      limitedTodoSet.add(newTodo);
      todoThree.innerHTML = [...limitedTodoSet][2];
      todoInput.value = "";
    }
  }
}