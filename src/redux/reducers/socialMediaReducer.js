// reducers/socialMediaReducer.js
const initialState = [];

const socialMediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SOCIAL_MEDIA':
      return [...state, action.payload];
    case 'DELETE_SOCIAL_MEDIA':
      return state.filter((social, index) => index !== action.payload);
    default:
      return state;
  }
};

export default socialMediaReducer;
