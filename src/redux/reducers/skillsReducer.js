// reducers/skillsReducer.js
const initialState = [];

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      return [...state, action.payload];
    case 'DELETE_SKILL':
      return state.filter((skill, index) => index !== action.payload);
    default:
      return state;
  }
};

export default skillsReducer;
