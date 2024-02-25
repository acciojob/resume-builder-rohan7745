// actions/educationActions.js
export const addEducation = (education) => ({
    type: 'ADD_EDUCATION',
    payload: education,
  });
  
  export const deleteEducation = (index) => ({
    type: 'DELETE_EDUCATION',
    payload: index,
  });
  