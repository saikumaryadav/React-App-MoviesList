import React, { Component } from "react";
import profileImage from "../../pictures/saikumar.jpeg";
const Profile = () => {
  return (
    <div class="container">
      <br />
      <br />
      <br />
      <br />
      <img class="profile-img" src={profileImage} alt="Profile" />
      <div class="name">{/* <p>Saikumar</p> */}</div>
    </div>
  );
};

export default Profile;
