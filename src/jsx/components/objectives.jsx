import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/objectives.css';

export default class Objectives extends React.Component {

  isInterviewerNice(){
    return ( Math.random() < (this.props.nicePercent / 100 ) );
  }

  constructor() {
    super();
    this.normalObjectives = ['Learn React',
                             'Learn web designing',
                             'Study coding riddles',
                             'Improve interview skills',
                             'Build several portfolio web-apps'];

    this.kissAssObjectives = ['Learn to cook'];
  }
  render() {
    return (
      <div className="objectives">
        <p>
          <i>According to the year {new Date().getFullYear()} my goals are as follows:</i>
        </p>
        <ul>
          {this.normalObjectives.map(item => {
            return <li>{item}</li>;
          })}
          {this.isInterviewerNice() &&
           this.kissAssObjectives.map( item => {
             return <li>{item}</li>;
           })}
        </ul>
      </div>
    );
  }
}
