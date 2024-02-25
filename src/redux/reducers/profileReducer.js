// reducers/profileReducer.js
const initialState = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    address: '',
    imageUrl: '',
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FIRST_NAME':
        return { ...state, firstName: action.payload };
      case 'UPDATE_LAST_NAME':
        return { ...state, lastName: action.payload };
      case 'UPDATE_MOBILE_NUMBER':
        return { ...state, mobileNumber: action.payload };
      case 'UPDATE_ADDRESS':
        return { ...state, address: action.payload };
      case 'UPDATE_IMAGE_URL':
        return { ...state, imageUrl: action.payload };
      default:
        return state;
    }
  };
  
  export default profileReducer;
  