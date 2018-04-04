import React from 'react';
import ReactDOM from 'react-dom';
import '../css/objectives.css';

const objectiveList = (
  <div className = "objectives">
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

ReactDOM.render(objectiveList,
                document.getElementById('app'));
