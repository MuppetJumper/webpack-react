import React from 'react';
import ReactDOM from 'react-dom';
import '../css/objectives.css';
import '../css/profile.css';
import dummyProfilePic from '../images/profile-picture.png';
import realProfilePic from '../images/id_pic.jpg';

const profileDescription = "My name is Yuval and I'm a junior web developer";

let onPicClick = ((e) => {
  let targetImg = document.getElementById('profilePic');
  targetImg.src = realProfilePic;
});

const shortProfile = (
  <div className="shortProfile">
    <img id="profilePic" src={dummyProfilePic} onClick={onPicClick} />
    <p id="profileDescription">{profileDescription}</p>
  </div>
)

const objectiveList = (
  <div className="objectives">
    <p>
      <i>According to the year {new Date().getFullYear()} my goals are as follows:</i>
    </p>
    <ul>
      <li>Learn React</li>
      <li>Learn web designing</li>
      <li>Study coding riddles</li>
      <li>Improve interview skills</li>
      <li>Build several portfolio web-apps</li>
    </ul>
  </div>
);

const appLayout = (
  <div>
    {shortProfile}
    {objectiveList}
  </div>
);

ReactDOM.render(appLayout,
                document.getElementById('app'));
