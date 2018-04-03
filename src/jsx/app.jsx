import React from 'react';
import ReactDOM from 'react-dom';

const toDoList = (
  <ul>
    <li>Learn React</li>
    <li>Learn Web designing</li>
    <li>Study coding riddles</li>
    <li>Improve interview skills</li>
    <li>Build several portfolio web-apps</li>
  </ul>
);

ReactDOM.render(toDoList,
                document.getElementById('app'));
