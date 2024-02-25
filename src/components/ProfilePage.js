// components/ProfilePage.js
import React from 'react';
import { connect } from 'react-redux';
import { updateFirstName, updateLastName, updateMobileNumber, updateAddress, updateImageUrl } from '../redux/actions/profileActions';

const ProfilePage = ({ firstName, lastName, mobileNumber, address, imageUrl, updateFirstName, updateLastName, updateMobileNumber, updateAddress, updateImageUrl }) => {
  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => updateFirstName(e.target.value)}
        name="fname"
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => updateLastName(e.target.value)}
        name="lname"
        placeholder="Last Name"
      />
      <input
        type="text"
        value={mobileNumber}
        onChange={(e) => updateMobileNumber(e.target.value)}
        name="phone"
        placeholder="Mobile Number"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => updateAddress(e.target.value)}
        name="address"
        placeholder="Address"
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => updateImageUrl(e.target.value)}
        name="url"
        placeholder="Image URL"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  firstName: state.profile.firstName,
  lastName: state.profile.lastName,
  mobileNumber: state.profile.mobileNumber,
  address: state.profile.address,
  imageUrl: state.profile.imageUrl,
});

const mapDispatchToProps = {
  updateFirstName,
  updateLastName,
  updateMobileNumber,
  updateAddress,
  updateImageUrl,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
