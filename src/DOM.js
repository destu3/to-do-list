import { userSidebarProjects, DEFAULT_PROJECTS, projects } from "./projects";
import { createNewTask, taskColor, viewMoreDetails } from "./tasks";

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
    taskDiv.addEventListener("click", () => {
      viewMoreDetails();
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

    taskDiv.append(checkBox, taskSummary, favBtn, extraTaskDetails);
    defaultTaskView.appendChild(taskDiv);
  });
}

function clearMainContainer() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
}
