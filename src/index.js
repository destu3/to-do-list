import "../src/styles/dashboard.css";
import { openNewTaskModal, closeNewTaskModal, newTask, defaultGenerateTasks } from "./DOM.js";

// selecting main DOM elements
const openModal = document.querySelector("#new-task-btn");
const closeModal = document.querySelector(".close-btn");
const createTask = document.querySelector(".submit-form-button");
const currentDate = document.getElementById("curr-date");

// content that is generated when the window loads
window.addEventListener("DOMContentLoaded", defaultGenerateTasks);

//task modal handlers
openModal.addEventListener("click", openNewTaskModal);
closeModal.addEventListener("click", closeNewTaskModal);
createTask.addEventListener("click", newTask);
