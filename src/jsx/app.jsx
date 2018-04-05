import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/profile.jsx';
import Objectives from './components/objectives.jsx';

const appLayout = (
  <div>
    <Profile />
    <Objectives />
  </div>
);

ReactDOM.render(appLayout,
                document.getElementById('app'));
