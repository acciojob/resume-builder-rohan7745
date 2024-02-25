// actions/projectsActions.js
export const addProject = (project) => ({
    type: 'ADD_PROJECT',
    payload: project,
  });
  
  export const deleteProject = (index) => ({
    type: 'DELETE_PROJECT',
    payload: index,
  });
  