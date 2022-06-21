import { projects, DEFAULT_PROJECTS, createNewProjectsFolder } from "./projects.js";
import Task from "./tasks.js";
import "../src/styles/dashboard.css";
import {
  generateProjectsOnSidebar,
  openNewTaskModal,
  closeNewTaskModal,
  newTask,
  defaultGenerateTasks,
  toggleTaskComplete,
} from "./DOM.js";

// selecting main DOM elements
const openModal = document.querySelector("#new-task-btn");
const closeModal = document.querySelector(".close-btn");
const createTask = document.querySelector(".submit-form-button");

// content that is generated when the window loads
window.addEventListener("DOMContentLoaded", generateProjectsOnSidebar);
window.addEventListener("DOMContentLoaded", defaultGenerateTasks);

//task modal handlers
openModal.addEventListener("click", openNewTaskModal);
closeModal.addEventListener("click", closeNewTaskModal);
createTask.addEventListener("click", newTask);
