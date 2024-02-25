// components/ProjectsPage.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProject, deleteProject } from '../redux/actions/projectsActions';

const ProjectsPage = ({ projects, addProject, deleteProject }) => {
  const [projectName, setProjectName] = useState('');
  const [techStack, setTechStack] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProject = () => {
    const newProject = { projectName, techStack, description };
    addProject(newProject);
    setProjectName('');
    setTechStack('');
    setDescription('');
  };

  return (
    <div>
      <h2>Projects</h2>
      <div>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project Name"
        />
        <input
          type="text"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          placeholder="Tech Stack"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button onClick={handleAddProject}>Add Project</button>
      </div>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <div>
              <h3>{project.projectName}</h3>
              <p>{project.techStack}</p>
              <p>{project.description}</p>
              <button onClick={() => deleteProject(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

const mapDispatchToProps = {
  addProject,
  deleteProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
