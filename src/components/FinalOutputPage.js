// components/FinalOutputPage.js
import React from 'react';
import { connect } from 'react-redux';

const FinalOutputPage = ({ profile, education, skills, projects, socialMedia }) => {
  return (
    <div>
      <h2>Final Output</h2>
      <h3>Profile</h3>
      <p>First Name: {profile.firstName}</p>
      <p>Last Name: {profile.lastName}</p>
      <p>Mobile Number: {profile.mobileNumber}</p>
      <p>Address: {profile.address}</p>
      <p>Image URL: {profile.imageUrl}</p>

      <h3>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.courseName} - {edu.completionYear} - {edu.college} - {edu.percentage}
          </li>
        ))}
      </ul>

      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Projects</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            {project.projectName} - {project.techStack} - {project.description}
          </li>
        ))}
      </ul>

      <h3>Social Media</h3>
      <ul>
        {socialMedia.map((social, index) => (
          <li key={index}>{social}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  education: state.education,
  skills: state.skills,
  projects: state.projects,
  socialMedia: state.socialMedia,
});

export default connect(mapStateToProps)(FinalOutputPage);
