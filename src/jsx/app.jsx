import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/profile.jsx';
import '../css/objectives.css';








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
    <Profile />
    {objectivesSegment}
  </div>
);

ReactDOM.render(appLayout,
                document.getElementById('app'));
