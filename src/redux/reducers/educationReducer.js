// reducers/educationReducer.js
const initialState = [];

const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EDUCATION':
      return [...state, action.payload];
    case 'DELETE_EDUCATION':
      return state.filter((edu, index) => index !== action.payload);
    default:
      return state;
  }
};

export default educationReducer;
