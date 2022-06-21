import { projects, DEFAULT_PROJECTS } from "./projects";

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

today = mm + "/" + dd + "/" + yyyy;

export const DEFAULT_TASK = new Task("Default Task", "This is a default task", String(today), "Average Severity");

export function taskColor(severity) {
  let taskColor = null;

  if (severity === "unimportant") {
    taskColor = "#a6fd97";
  } else if (severity === "default") {
    taskColor = "#FFD580";
  } else {
    taskColor = " #FF7276";
  }
  return taskColor;
}
