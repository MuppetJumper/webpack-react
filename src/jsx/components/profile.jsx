import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/profile.css';
import dummyProfilePic from '../../images/profile-picture.png';
import realProfilePic from '../../images/id_pic.jpg';


export default class Profile extends React.Component {
  onProfilePicClick(e){
    e.target.src =
      e.target.src === dummyProfilePic ? realProfilePic : dummyProfilePic;
  }
  constructor() {
    super();
    this.profileDescription = "My name is Yuval and I'm a junior web developer";
    this.onProfilePicClick.bind(this);
  }
  render(){
    return (
      <div className="shortProfile">
        <img id="profilePic"
             src={dummyProfilePic}
             onClick={this.onProfilePicClick}
             title="Click to show face" />
        <p id="profileDescription">
          {this.profileDescription}
        </p>
      </div>
    );
  }
};
