import { userSidebarProjects } from "./projects";
import { createNewTask } from "./tasks";

// This module handles most actions
export function generateProjectsOnSidebar() {
  userSidebarProjects();
}

export function openNewTaskModal() {
  const openModal = document.querySelector("#new-task-btn");
  const modalOverlay = document.querySelector(".modal-overlay");
  openModal.addEventListener("click", () => {
    modalOverlay.classList.add("open-modal");
  });
}

export function closeNewTaskModal() {
  const closeModal = document.querySelector(".close-btn");
  const modalOverlay = document.querySelector(".modal-overlay");
  closeModal.addEventListener("click", () => {
    modalOverlay.classList.remove("open-modal");
  });
}

export function newTask() {
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const dueDate = document.getElementById("due-date");
  const priority = document.getElementById("priority");
  const createTask = document.querySelector(".submit-form-button");

  createTask.addEventListener("click", createNewTask(title.value, desc.value, dueDate.value, priority.value));
}
