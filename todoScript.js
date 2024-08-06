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

// Reset todos
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

// Common code for all todos (#1, #2, #3) (when editing)
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

// Add todos (to todo list)
function addTaskToSet() {
    // console.log("addTaskToSet() körs")
    updateDropDownText();
    checkNumberOfCharacters(todoInput);

  if (todoInput.value === "") {
    alert("You must write a todo text!");
  }

// Om todo-maxgräns (3x) uppnådd: alert-box skrivs ut
  if (limitedTodoSet.size === maxElements && dropDownText === "Todo list") {
    alert("Current Todo limit (3) is reached.");
  }
  // Ändra specifika todos (edit)
  // p1. Om Todo #1 inte är "1. ..." och alternativ "#1" är valt i rullmeny
  // p2. Lägg in värde i editTodo(number)
  // p3. Om limitedTodoSet har värden för todo #x och #y -> lägg in värden [...limitedTodoSet][a] & [...limitedTodoSet][b] i editTodo(number)-variabler
  // p4. Lägg in en text-sträng om en specifik todo ändras och någon annan är tom (saknar värde)

  // "p1."
  if (todoOne.innerHTML != "1. ..." && dropDownText !== "Todo list" && dropDownText === "#1" && todoInput.value !== "") {
    editTodoOne = "1. " + todoInput.value
     // "p2."
    if (limitedTodoSet.has([...limitedTodoSet][1])) {
      editTodoTwo = [...limitedTodoSet][1]}
      // "p3."
      else {
        editTodoTwo = "...";
      };
      if (limitedTodoSet.has([...limitedTodoSet][2])) {
        editTodoThree = [...limitedTodoSet][2]}
        // "p4."
        else {
          editTodoThree = ". . .";
        };
    editTodoSet();
    saveTaskOne();
    showTask();
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
    showTask()
  }
  if (todoThree.innerHTML != "3. ..." && dropDownText !== "Todo list" && dropDownText === "#3" && todoInput.value !== "") {
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
    saveTaskThree();
    showTask()
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

// 1. Check if todoOne.innerHTML innehåller todo (kod i else-sats: om todo finns)
if (todoOne.innerHTML === "" || todoOne.innerHTML.includes("1. ...") || todoOne.innerHTML === undefined) {
} else {
  limitedTodoSet.add(todoOne.innerHTML);
  saveTaskOne();
}

if (todoTwo.innerHTML === "" || todoTwo.innerHTML.includes("2. ...") || todoTwo.innerHTML === undefined) {
} else {
  limitedTodoSet.add(todoTwo.innerHTML);
  saveTaskTwo();
}

if (todoThree.innerHTML === "" || todoThree.innerHTML.includes("3. ...") || todoThree.innerHTML === undefined) {
} else {
  limitedTodoSet.add(todoThree.innerHTML);
  saveTaskThree();
}

// _ _ _

        // Function to get the current date in CET
        function getCETDate() {
          const now = new Date();
          // Convert to milliseconds
          const utcOffset = now.getTimezoneOffset() * 60000;
          // Create a new date object in UTC
          const utcTime = now.getTime() + utcOffset;
          // Add the CET offset (UTC+1, which is 3600000 milliseconds)
          const cetTime = utcTime + 3600000;
          return new Date(cetTime);
      }

        // Function to get the current weekday as a three-letter abbreviation
        function getWeekday(date) {
          const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          return weekdays[date.getDay()];
      }

        // Function to format date as YYYY-MM-DD
        function formatDate(date) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          return `${year}-${month}-${day}`;
      }

      // Function to get the current week number of the year
      function getWeekNumber(date) {
          const startOfYear = new Date(date.getFullYear(), 0, 1);
          const pastDaysOfYear = (date - startOfYear) / 86400000;
          return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
      }


      // Get today's date in CET
      const today = getCETDate();

      // Display current weekday
      const weekdayDisplay = document.getElementById('weekday-display');
      weekdayDisplay.textContent = `${getWeekday(today)}`;

      // Display today's date
      const dateDisplay = document.getElementById('date-display');
      dateDisplay.textContent = `${formatDate(today)}`;

      // Display current week number
      const weekDisplay = document.getElementById('week-display');
      weekDisplay.textContent = `Week: ${getWeekNumber(today)}`;