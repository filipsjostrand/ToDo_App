// Modified code base from GreatStack: https://www.youtube.com/watch?v=G0jO8kUrg-I

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Get a reference to the image element
const copyImage = document.querySelector("img.edit-created-todo");

const charCounter = document.getElementById('char-counter');
const maxChars = 50;

// Add todo (empty input field)
function addTask() {
  if (inputBox.value === "") {
    alert("You must write a todo text!");
  } else {
    let li = document.createElement("li");
    checkNumberOfCharacters(inputBox)
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.className = "delete-todo-cross";
    li.appendChild(span);

    let copyImage = document.createElement("img");
    copyImage.className = "copy-created-todo";
    copyImage.src = "images/Bw_copy_icon_320x320.png";
    copyImage.alt =
      "By PeterMe1508 - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=67914718";
    li.appendChild(copyImage);

    // Add click event listener to the copyImage
    copyImage.addEventListener("click", function () {
      editTodoText(li);

    });

    saveData();
  }
  inputBox.value = "";
}

// Edit todo text
function editTodoText(li) {
  // copyImage.src = "images/Noun_Project_Save_Icon_1527077.svg";
  // copyImage.alt="By Astutik Icon - https://thenounproject.com/search/?q=floppy%20disk&i=1527077, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=87489803";
  let currentText = li.childNodes[0].nodeValue; // Get current text
  let input = document.createElement("input");
  input.type = "text";
  input.value = currentText;
  input.className = "edit-input";
  let currentTodo = li.childNodes[0].nodeValue
  li.childNodes[0].nodeValue = ''; // Clear current text
  li.childNodes[0].textContent = currentText;


  li.insertBefore(input, li.firstChild);
  li.childNodes[0].nodeValue = currentTodo;

  input.addEventListener("blur", function () {
    li.childNodes[0].nodeValue = input.value;
    li.removeChild(input);
    saveData();
  });

  input.focus();
}

// Todo onclick: Toggle checked/unchecked (todo), span onclick: remove todo
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function checkNumberOfCharacters(inputBox) {
  
    const currentLength = inputBox.value.length;
    charCounter.textContent = `${currentLength}/${maxChars}`;

    if (currentLength > maxChars) {
      inputBox.value = inputBox.value.slice(0, maxChars); // Trim the excess characters
      charCounter.textContent = `${maxChars}/${maxChars}`;
    }

    // Add or remove 'exceeded' class based on current length
    if (currentLength > maxChars) {
      charCounter.classList.add('exceeded');
    } else {
      charCounter.classList.remove('exceeded');
    }
  // });
  return inputBox.value;
}

// Save todo-data to localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Get todo-data from localStorage and re-add event listeners to the images
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
