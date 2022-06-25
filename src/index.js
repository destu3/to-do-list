import "../src/styles/dashboard.css";
import { openNewTaskModal, closeNewTaskModal, defaultGenerateTasks } from "./DOM.js";
import { DEFAULT_PROJECTS } from "./projects";
import { save, newTask } from "./tasks";

// selecting main DOM elements
const openModal = document.querySelector("#new-task-btn");
const closeModal = document.querySelector(".close-btn");
const createTask = document.querySelector(".submit-form-button");

// content that is generated when the window loads
window.addEventListener("DOMContentLoaded", defaultGenerateTasks);
//task modal handlers
openModal.addEventListener("click", openNewTaskModal);
closeModal.addEventListener("click", closeNewTaskModal);
createTask.addEventListener("click", newTask);
createTask.addEventListener("click", save);
