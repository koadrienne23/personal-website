import React from 'react';

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        checked={props.optionContent === props.userAnswer}
        value={props.optionContent}
        disabled={props.userAnswer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.optionContent}
      </label>
    </li>
  );
}

export default AnswerOption;