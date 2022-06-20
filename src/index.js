import { projects, DEFAULT_PROJECTS, createNewProjectsFolder } from "./projects.js";
import Task from "./tasks.js";
import "../src/styles/dshbrd.css";
import { generateProjectsOnSidebar } from "./DOM.js";

// generates all projects on the sidebar
window.addEventListener("DOMContentLoaded", generateProjectsOnSidebar);
