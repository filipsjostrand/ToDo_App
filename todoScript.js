// const listContainer = document.getElementById("list-container");

let todoInput = document.getElementById("input-box-v2");
let todoOne = document.getElementById("todo-1");
let todoTwo = document.getElementById("todo-2");
let todoThree = document.getElementById("todo-3");
let resetTodoButton = document.querySelector(".reset-todo-button");
let newTodo;

var dropDownSelection = document.getElementById("todo-select");
var dropDownText;
let editTodoOne;

// 2024-07-15, Nästa gång:
//  1. Fixa CSS
//  2. Skriv ReadMe.txt

const characterCounter = document.getElementById('character-counter');
const maximumChars = 50;
const maxElements = 3;
let limitedTodoSet = new Set();

// _ _ _

// let checkbox = document.querySelector(".checkbox");
let checkboxOne = document.getElementById("first");
let checkboxTwo = document.getElementById("second");
let checkboxThree = document.getElementById("third");

// Optionally, add an event listener to handle the checkbox state
checkboxOne.addEventListener('change', function() {
    if (checkboxOne.checked) {
      todoOne.style.textDecoration = 'line-through';
    } else {
      todoOne.style.textDecoration = 'none';
    }
  });

checkboxTwo.addEventListener('change', function() {
    if (checkboxTwo.checked) {
      todoTwo.style.textDecoration = 'line-through';
    } else {
      todoTwo.style.textDecoration = 'none';
    }
});

checkboxThree.addEventListener('change', function() {
    if (checkboxThree.checked) {
      todoThree.style.textDecoration = 'line-through';
    } else {
      todoThree.style.textDecoration = 'none';
    }
});

// _ _ _

function checkNumberOfCharacters(todoInput) {

  const currentLength = todoInput.value.length;

  if (currentLength > maximumChars) {
    todoInput.value = todoInput.value.slice(0, maximumChars); // Trim the excess characters
    alert("Max character limit (50) exceeded!");
  }

  // Add or remove 'exceeded' class based on current length
  if (currentLength > maximumChars) {
    characterCounter.classList.add('exceeded');
  } else {
    characterCounter.classList.remove('exceeded');
  }
return todoInput.value;
}

function updateDropDownText() {
  // Modify the variable inside the function
    window.addEventListener('change', function() {
    dropDownText = dropDownSelection.options[dropDownSelection.selectedIndex].text;
  })
}

updateDropDownText();

function resetTodoSet() {
  limitedTodoSet = new Set();
  todoOne.innerHTML = "1. ...";
  saveTaskOne();
  todoTwo.innerHTML = "2. ...";
  saveTaskTwo();
  todoThree.innerHTML = "3. ...";
  saveTaskThree();
  todoInput.value = "";
  window.location.reload();
}

function editTodoSet() {
  limitedTodoSet = new Set();
  todoOne.innerHTML = ""
  todoTwo.innerHTML = ""
  todoThree.innerHTML = ""
  limitedTodoSet.add(editTodoOne);
  limitedTodoSet.add(editTodoTwo);
  limitedTodoSet.add(editTodoThree);
  todoOne.innerHTML = [...limitedTodoSet][0];
  todoTwo.innerHTML = [...limitedTodoSet][1];
  todoThree.innerHTML = [...limitedTodoSet][2];
  saveTaskOne();
  saveTaskTwo();
  saveTaskThree();
  todoInput.value = "";
}

function addTaskToSet() {
    // console.log("addTaskToSet() körs")
    updateDropDownText();
    checkNumberOfCharacters(todoInput);

  if (todoInput.value === "") {
    alert("You must write a todo text!");
  }

   // Ändra specifika todos (edit)
  if (limitedTodoSet.size === maxElements && dropDownText === "Todo list") {
    alert("Current Todo limit (3) is reached.");
  }
  if (todoOne.innerHTML != "1. ..." && dropDownText !== "Todo list" && dropDownText === "#1" && todoInput.value !== "") {
    editTodoOne = "1. " + todoInput.value
    if (limitedTodoSet.has([...limitedTodoSet][1])) {
      editTodoTwo = [...limitedTodoSet][1]}
      else {
        editTodoTwo = "...";
      };
      if (limitedTodoSet.has([...limitedTodoSet][2])) {
        editTodoThree = [...limitedTodoSet][2]}
        else {
          editTodoThree = ". . .";
        };
    editTodoSet();
    saveTaskOne();
  }

  if (todoTwo.innerHTML != "2. ..." && dropDownText !== "Todo list" && dropDownText === "#2" && todoInput.value !== "") {
    if (limitedTodoSet.has([...limitedTodoSet][0])) {
      editTodoOne = [...limitedTodoSet][0]}
      else {
        editTodoOne = "... ";
      };
    editTodoTwo = "2. " + todoInput.value
    if (limitedTodoSet.has([...limitedTodoSet][2])) {
      editTodoThree = [...limitedTodoSet][2]}
      else {
        editTodoThree = " ...";
      };
    editTodoSet();
    saveTaskTwo();

  }
  if (todoThree.innerHTML != "3. ..." && dropDownText !== "Todo list" && dropDownText === "#3" && todoInput.value !== "") {
    console.log("r101 ooa)")
    if (limitedTodoSet.has([...limitedTodoSet][0])) {
      editTodoOne = [...limitedTodoSet][0]}
      else {
        editTodoOne = "... ";
      };
    if (limitedTodoSet.has([...limitedTodoSet][1])) {
      editTodoTwo = [...limitedTodoSet][1]}
      else {
        editTodoTwo = "... ";
      };
    editTodoThree = "3. " + todoInput.value
    editTodoSet();
  }

  // Lägg till todos (en i taget)
  if (limitedTodoSet.size < maxElements && todoInput.value !== "") {
    if (todoOne.innerHTML === "1. ..." && dropDownText === "Todo list") {
      newTodo = "1. " + todoInput.value
      limitedTodoSet.add(newTodo);
      todoOne.innerHTML = [...limitedTodoSet][0];
      saveTaskOne();
      todoInput.value = "";

    } else if (todoOne.innerHTML != "1. ..." && todoTwo.innerHTML === "2. ..." && dropDownText === "Todo list") {
      newTodo = "2. " + todoInput.value
      limitedTodoSet.add(newTodo);
      todoTwo.innerHTML = [...limitedTodoSet][1];
      saveTaskTwo();
      todoInput.value = "";

    } else if (todoOne.innerHTML != "1. ..." && todoTwo.innerHTML != "2. ..." && dropDownText === "Todo list" && todoThree.innerHTML === "3. ...") {
      newTodo = "3. " + todoInput.value
      limitedTodoSet.add(newTodo);
      todoThree.innerHTML = [...limitedTodoSet][2];
      saveTaskThree();
      todoInput.value = "";
    }
    // saveData();
  }
}

// Save todo-data to localStorage
function saveTaskOne() {
  localStorage.setItem("todoOneStore", todoOne.innerHTML);
}
function saveTaskTwo() {
  localStorage.setItem("todoTwoStore", todoTwo.innerHTML);
}
function saveTaskThree() {
  localStorage.setItem("todoThreeStore", todoThree.innerHTML);
}

// Get todo-data from localStorage
function showTask() {
  todoOne.innerHTML = localStorage.getItem("todoOneStore");
  todoTwo.innerHTML = localStorage.getItem("todoTwoStore");
  todoThree.innerHTML = localStorage.getItem("todoThreeStore");
}

showTask();