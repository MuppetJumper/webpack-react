import React from 'react';
import ReactDOM from 'react-dom';

const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Study coding riddles</li>
    <li>Improve interview skills</li>
    <li>Build several portfolio web-apps</li>
  </ol>
);

ReactDOM.render(toDoList,
                document.getElementById('app'));
