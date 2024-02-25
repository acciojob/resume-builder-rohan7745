// actions/socialMediaActions.js
export const addSocialMedia = (socialMedia) => ({
    type: 'ADD_SOCIAL_MEDIA',
    payload: socialMedia,
  });
  
  export const deleteSocialMedia = (index) => ({
    type: 'DELETE_SOCIAL_MEDIA',
    payload: index,
  });
  