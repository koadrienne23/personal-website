import React from 'react'
import './Quiz.css';

function QuizStart(props) {
  return (
      <div className="quiz-start">
        <input
            type = 'text'
            placeholder = 'Enter your name...'
            value = {props.name} 
            onChange = {props.updateName}
        />
        <h1 onClick={props.onStart}>Start quiz >></h1>
        {props.invalid ? <p>Please enter a name to start.</p> : null}
      </div>
  );
}

export default QuizStart;