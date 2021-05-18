import React from 'react'
import './Quiz.css';
import AnswerOption from './AnswerOption';

function QuizContent(props) {
  return (
      <div className="quiz-content">
        {/* Displays the current question number */}
        <div className="questionCount">
          Question <span>{props.questionId}</span> of <span>{props.questionTotal}</span>
        </div>

        {/* The question */}
        <h2 className="question">{props.question}</h2>

        {/* Displays the answer options */}
        <ul className="answerOptions">
          {props.answerOptions.map((option)=>
            <AnswerOption
              optionContent={option}
              userAnswer={props.answer}
              onAnswerSelected={props.onAnswerSelected}
            />
          )}
        </ul>
      </div>
  );
}

export default QuizContent;