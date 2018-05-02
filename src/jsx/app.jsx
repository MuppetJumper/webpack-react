import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/profile.jsx';
import Objectives from './components/objectives.jsx';
import {StockStatusContainer} from './containers/StockStatusContainer.jsx';

const appLayout = (
  <div>
    <Profile />
    <Objectives nicePercent='50' />
    <StockStatusContainer />
  </div>
);

ReactDOM.render(appLayout,
                document.getElementById('app'));
