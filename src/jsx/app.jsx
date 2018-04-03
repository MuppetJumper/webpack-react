import React from 'react';
import ReactDOM from 'react-dom';
import '../css/objectives.css';

const objectiveList = (
  <ul className = "objectives" >
    <li>Learn React</li>
    <li>Learn web designing</li>
    <li>Study coding riddles</li>
    <li>Improve interview skills</li>
    <li>Build several portfolio web-apps</li>
  </ul>
);

ReactDOM.render(objectiveList,
                document.getElementById('app'));
