// reducers/projectsReducer.js
const initialState = [];

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.payload];
    case 'DELETE_PROJECT':
      return state.filter((project, index) => index !== action.payload);
    default:
      return state;
  }
};

export default projectsReducer;
