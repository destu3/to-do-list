import { DEFAULT_PROJECTS } from "./projects";
import { clearMainContainer, defaultGenerateTasks } from "./DOM";

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

export function createNewTask(title, desc, dueDate, priority) {
  let task = new Task(title, desc, dueDate, priority);
  //for now all tasks will be added to DEFAULT_PROJECTS array
  DEFAULT_PROJECTS.push(task);
}

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

export const DEFAULT_TASK = new Task("Default Task", "This is a default task", today, "Average Severity");

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

export function deleteTask(index) {
  DEFAULT_PROJECTS.splice(index, 1);
  clearMainContainer();
  defaultGenerateTasks();
}
