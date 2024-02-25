// components/EducationPage.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEducation, deleteEducation } from '../redux/actions/educationActions';

const EducationPage = ({ education, addEducation, deleteEducation }) => {
  const [newEducation, setNewEducation] = useState({});

  const handleAddEducation = () => {
    addEducation(newEducation);
    setNewEducation({});
  };

  return (
    <div>
      {education.map((edu, index) => (
        <div key={index}>
          <p>{edu.courseName}</p>
          <p>{edu.completionYear}</p>
          <p>{edu.college}</p>
          <p>{edu.percentage}</p>
          <button onClick={() => deleteEducation(index)}>Delete</button>
        </div>
      ))}
      <input
        type="text"
        value={newEducation.courseName || ''}
        onChange={(e) => setNewEducation({ ...newEducation, courseName: e.target.value })}
        placeholder="Course Name"
      />
      <input
        type="text"
        value={newEducation.completionYear || ''}
        onChange={(e) => setNewEducation({ ...newEducation, completionYear: e.target.value })}
        placeholder="Completion Year"
      />
      <input
        type="text"
        value={newEducation.college || ''}
        onChange={(e) => setNewEducation({ ...newEducation, college: e.target.value })}
        placeholder="College"
      />
      <input
        type="text"
        value={newEducation.percentage || ''}
        onChange={(e) => setNewEducation({ ...newEducation, percentage: e.target.value })}
        placeholder="Percentage"
      />
      <button onClick={handleAddEducation}>Add Education</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  education: state.education,
});

const mapDispatchToProps = {
  addEducation,
  deleteEducation,
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationPage);
