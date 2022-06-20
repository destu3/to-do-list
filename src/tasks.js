import { projects, DEFAULT_PROJECTS } from "./projects";
export default class Task {
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
