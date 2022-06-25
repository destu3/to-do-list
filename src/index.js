import "../src/styles/dashboard.css";
import { openNewTaskModal, closeNewTaskModal, defaultGenerateTasks } from "./DOM.js";
import { save, newTask } from "./tasks";
import Icon from "./assets/mock-pfp.jpg";

// selecting main DOM elements
const openModal = document.querySelector("#new-task-btn");
const closeModal = document.querySelector(".close-btn");
const createTask = document.querySelector(".submit-form-button");
const userPfp = document.querySelector(".profile-picture");

// content that is generated when the window loads
window.addEventListener("DOMContentLoaded", defaultGenerateTasks);
window.addEventListener("DOMContentLoaded", () => {
  userPfp.src = Icon;
});

//task modal handlers
openModal.addEventListener("click", openNewTaskModal);
closeModal.addEventListener("click", closeNewTaskModal);
createTask.addEventListener("click", newTask);
createTask.addEventListener("click", save);
