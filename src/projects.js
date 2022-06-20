export const DEFAULT_PROJECTS = [];
export const projects = [DEFAULT_PROJECTS];

export function createNewProjectsFolder(projectName) {
  projectName = [];
  projects.push(projectName);
  console.log(projects);
}
