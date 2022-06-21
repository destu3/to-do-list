import { DEFAULT_TASK } from "./tasks";

export const DEFAULT_PROJECTS = [DEFAULT_TASK];
export const projects = [DEFAULT_PROJECTS];

// DOM elements
const leftSideWrapper = document.querySelector(".left-side-wrapper");

// displaying projects on the db sidebar
export function userSidebarProjects() {
  const projectsList = document.createElement("ul");
  projectsList.classList.add("projects");

  projects.forEach(project => {
    const projectButton = document.createElement("button");
    const projectName = document.createElement("li");
    projectName.textContent = `Project ${projects.indexOf(project)} `;
    projectButton.appendChild(projectName);
    projectsList.appendChild(projectButton);
  });
  leftSideWrapper.appendChild(projectsList);
}
