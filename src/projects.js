export const DEFAULT_PROJECTS = [];
export const projects = [DEFAULT_PROJECTS];

export function createNewProjectsFolder(projectName) {
  projectName = [];
  projects.push(projectName);
  console.log(projects);
}

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
