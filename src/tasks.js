import { DEFAULT_PROJECTS } from "./projects";
import { clearMainContainer, defaultGenerateTasks, desc, title, dueDate, priority } from "./DOM";

export class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  setTaskAsComplete() {
    if ((this.completed = false)) {
      this.completed = true;
    } else {
      this.completed = false;
    }
  }

  changePriority(newPriority) {
    this.priority = newPriority;
  }
}

function createNewTask(title, desc, dueDate, priority) {
  let task = new Task(title, desc, dueDate, priority);
  //for now all tasks will be added to DEFAULT_PROJECTS array
  DEFAULT_PROJECTS.push(task);
}

function newTaskLocalStorage(title, desc, dueDate, priority) {
  let task = new Task(title, desc, dueDate, priority);
  return task;
}

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

export const DEFAULT_TASK = new Task("Default Task", "This is a default task", today, "Average Severity");

//function which assigns colors to task based on severity
export function taskColor(severity) {
  let taskColor = null;

  if (severity == "Not severe") {
    taskColor = "#a6fd97";
  } else if (severity == "Average Severity") {
    taskColor = "#FFD580";
  } else if (severity == "Severe") {
    taskColor = "#FF7276";
  }
  return taskColor;
}

//delete task function
export function deleteTask(index) {
  DEFAULT_PROJECTS.splice(index, 1);
  let old_data = JSON.parse(localStorage.getItem("Default Projects"));
  old_data.splice(index, 1);
  localStorage.setItem("Default Projects", JSON.stringify(old_data));
  clearMainContainer();
  defaultGenerateTasks();
}

//save task to local storage
export function save() {
  //task to add to local storage
  let task = newTaskLocalStorage(title.value, desc.value, dueDate.value, priority.value);

  //if there is nothing saved at the start then save an empty string
  if (localStorage.getItem("Default Projects") == null) {
    localStorage.setItem("Default Projects", "[]");
  }

  //add task to the Default Project
  let old_data = JSON.parse(localStorage.getItem("Default Projects"));
  let stringTask = JSON.stringify(task);
  old_data.push(stringTask);

  localStorage.setItem("Default Projects", JSON.stringify(old_data));
}

//populate DEFAULT_PROJECTS with tasks from local storage
export function generateFromLocal() {
  let objectVersion = JSON.parse(localStorage.getItem("Default Projects"));
  if (localStorage.getItem("Default Projects") != null) {
    for (let i = 0; i < objectVersion.length; i++) {
      createNewTask(
        JSON.parse(objectVersion[i]).title,
        JSON.parse(objectVersion[i]).description,
        JSON.parse(objectVersion[i]).dueDate,
        JSON.parse(objectVersion[i]).priority
      );
    }
  }
  return objectVersion;
}

//new task function
export function newTask() {
  createNewTask(title.value, desc.value, dueDate.value, priority.value);
  clearMainContainer();
  defaultGenerateTasks();
}
