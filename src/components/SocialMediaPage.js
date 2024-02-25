// components/SocialMediaPage.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSocialMedia, deleteSocialMedia } from '../redux/actions/socialMediaActions';

const SocialMediaPage = ({ socialMedia, addSocialMedia, deleteSocialMedia }) => {
  const [social, setSocial] = useState('');

  const handleAddSocialMedia = () => {
    addSocialMedia(social);
    setSocial('');
  };

  return (
    <div>
      <h2>Social Media</h2>
      <div>
        <input
          type="text"
          value={social}
          onChange={(e) => setSocial(e.target.value)}
          placeholder="Social Media Link"
        />
        <button onClick={handleAddSocialMedia}>Add Social Media</button>
      </div>
      <ul>
        {socialMedia.map((social, index) => (
          <li key={index}>
            <div>
              <p>{social}</p>
              <button onClick={() => deleteSocialMedia(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  socialMedia: state.socialMedia,
});

const mapDispatchToProps = {
  addSocialMedia,
  deleteSocialMedia,
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialMediaPage);
