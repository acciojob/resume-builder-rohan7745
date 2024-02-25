// components/SkillsPage.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSkill, deleteSkill } from '../redux/actions/skillsActions';

const SkillsPage = ({ skills, addSkill, deleteSkill }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    addSkill(newSkill);
    setNewSkill('');
  };

  return (
    <div>
      {skills.map((skill, index) => (
        <div key={index}>
          <p>{skill}</p>
          <button onClick={() => deleteSkill(index)}>Delete</button>
        </div>
      ))}
      <input
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Skill"
      />
      <button onClick={handleAddSkill}>Add Skill</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  skills: state.skills,
});

const mapDispatchToProps = {
  addSkill,
  deleteSkill,
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsPage);
