// store.js
import { createStore, combineReducers } from 'redux';
import profileReducer from './reducers/profileReducer';
import educationReducer from './reducers/educationReducer';
import skillsReducer from './reducers/skillsReducer';
import projectsReducer from './reducers/projectsReducer';
import socialMediaReducer from './reducers/socialMediaReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  education: educationReducer,
  skills: skillsReducer,
  projects: projectsReducer,
  socialMedia: socialMediaReducer,
});

const store = createStore(rootReducer);

export default store;
