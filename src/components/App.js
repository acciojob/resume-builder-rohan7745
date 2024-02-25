// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import EducationPage from './EducationPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';
import SocialMediaPage from './SocialMediaPage';
import FinalOutputPage from './FinalOutputPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProfilePage} />
        <Route path="/education" component={EducationPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/social-media" component={SocialMediaPage} />
        <Route path="/final-output" component={FinalOutputPage} />
      </Switch>
    </Router>
  );
};

export default App;
