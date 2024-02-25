// actions/skillsActions.js
export const addSkill = (skill) => ({
    type: 'ADD_SKILL',
    payload: skill,
  });
  
  export const deleteSkill = (index) => ({
    type: 'DELETE_SKILL',
    payload: index,
  });
  