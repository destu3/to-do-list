import { DEFAULT_PROJECTS, DEFAULT_PROJECTS_Deserialized } from "./projects";
import { createNewTask, taskColor, deleteTask } from "./tasks";

// This module handles functions for most DOM events
export function openNewTaskModal() {
  const modalOverlay = document.querySelector(".modal-overlay");

  modalOverlay.classList.add("open-modal");
}

export function closeNewTaskModal() {
  const modalOverlay = document.querySelector(".modal-overlay");

  modalOverlay.classList.remove("open-modal");
}

export function newTask() {
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const dueDate = document.getElementById("due-date");
  const priority = document.getElementById("priority");

  createNewTask(title.value, desc.value, dueDate.value, priority.value);
  clearMainContainer();
  defaultGenerateTasks();
}

// main container that everything is generated on
const mainContainer = document.querySelector(".main-container");

// generate tasks from DEFAULT_PROJECTS array by default
export function defaultGenerateTasks() {
  const defaultTaskView = document.createElement("div");
  defaultTaskView.classList.add("default-task-view");
  mainContainer.appendChild(defaultTaskView);

  DEFAULT_PROJECTS.forEach(task => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("data-default-projects-index", DEFAULT_PROJECTS.indexOf(task));
    taskDiv.style.background = taskColor(task.priority);
    // view more details of task added to every task created
    const extraTaskDetails = document.createElement("div");
    extraTaskDetails.classList.add("task-details");
    const taskDesc = document.createElement("p");
    taskDesc.textContent = task.description;
    const taskSeverity = document.createElement("p");
    taskSeverity.textContent = task.priority;
    extraTaskDetails.append(taskDesc, taskSeverity);
    taskDiv.addEventListener("mouseover", () => {
      extraTaskDetails.classList.add("view-more");
    });
    taskDiv.addEventListener("mouseout", () => {
      extraTaskDetails.classList.remove("view-more");
    });

    const checkBox = document.createElement("input");
    checkBox.classList.add("checkbox");
    checkBox.type = "checkbox";
    const taskSummary = document.createElement("div");
    taskSummary.classList.add("task-summary");
    const taskName = document.createElement("h4");
    taskName.textContent = task.title;
    const taskDueDate = document.createElement("p");
    taskDueDate.textContent = task.dueDate;
    taskSummary.append(taskName, taskDueDate);
    const favBtn = document.createElement("button");
    const favIcon = document.createElement("i");
    favIcon.classList.add("fa-regular", "fa-star", "favourite");
    favBtn.appendChild(favIcon);
    // delete button for task cards
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-regular", "fa-trash-can", "delete");
    deleteBtn.addEventListener("click", () => {
      deleteTask(taskDiv.getAttribute("data-default-projects-index"));
    });
    deleteBtn.appendChild(deleteIcon);

    // appending content on the DOM
    taskDiv.append(checkBox, taskSummary, favBtn, extraTaskDetails, deleteBtn);
    defaultTaskView.appendChild(taskDiv);
  });
}

export function clearMainContainer() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
}
