import React from 'react';
import ReactDOM from 'react-dom';
import '../css/objectives.css';
import '../css/profile.css';
import dummyProfilePic from '../images/profile-picture.png';
import realProfilePic from '../images/id_pic.jpg';




let onPicClick = ((e) => {
  e.target.src =
    e.target.src === dummyProfilePic ? realProfilePic : dummyProfilePic;
});

const profileDescription = "My name is Yuval and I'm a junior web developer";

const shortProfile = (
  <div className="shortProfile">
    <img id="profilePic" src={dummyProfilePic} onClick={onPicClick} title="Click to show face" />
    <p id="profileDescription">{profileDescription}</p>
  </div>
)


let isInterviewerNice = (()=>{
  return ( Math.random() < 0.5 );
});

const normalObjectives = ['Learn React',
                          'Learn web designing',
                          'Study coding riddles',
                          'Improve interview skills',
                          'Build several portfolio web-apps'];

const objectivesSegment = (
  <div className="objectives">
    <p>
      <i>According to the year {new Date().getFullYear()} my goals are as follows:</i>
    </p>
    <ul>
      {normalObjectives.map(objective=><li>{objective}</li>)}
      { isInterviewerNice() && <li>Learn to cook</li> }
    </ul>
  </div>
);

const appLayout = (
  <div>
    {shortProfile}
    {objectivesSegment}
  </div>
);

ReactDOM.render(appLayout,
                document.getElementById('app'));
