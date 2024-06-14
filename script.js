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
    let editImage = document.createElement("img");
    editImage.className = "edit-created-todo"
    editImage.src = "images/Edit_icon_(the_Noun_Project_30184).svg"

    // editButton.innerHTML = "image";
    li.appendChild(editImage);

    // Add click event listener to the editImage
    editImage.addEventListener('click', function() {
      alert('Image clicked!');
    });
    saveData()
  }
  inputBox.value = '';
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

  const images = listContainer.querySelectorAll('img.edit-created-todo');

    // Loop through the NodeList and add a click event listener to each image
    images.forEach(image => {
      image.addEventListener('click', function() {
        // Display an alert box when the image is clicked
        alert('Image clicked!');
      });
    });

}



showTask();