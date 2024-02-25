// actions/profileActions.js
export const updateFirstName = (firstName) => ({
    type: 'UPDATE_FIRST_NAME',
    payload: firstName,
  });
  
  export const updateLastName = (lastName) => ({
    type: 'UPDATE_LAST_NAME',
    payload: lastName,
  });
  
  export const updateMobileNumber = (mobileNumber) => ({
    type: 'UPDATE_MOBILE_NUMBER',
    payload: mobileNumber,
  });
  
  export const updateAddress = (address) => ({
    type: 'UPDATE_ADDRESS',
    payload: address,
  });
  
  export const updateImageUrl = (imageUrl) => ({
    type: 'UPDATE_IMAGE_URL',
    payload: imageUrl,
  });
  