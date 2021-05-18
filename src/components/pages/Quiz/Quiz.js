import React, { Component } from 'react';
import quizQuestions from './quizQuestions';
import QuizContent from './QuizContent';
import Result from './Result';
import * as db from '../../../firebase/datastore';
import QuizStart from './QuizStart';

class Quiz extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',             // user's name
        invalidName: false,
        counter: 0,           // current question index 
        questionId: 1,        // current question number
        question: '',         // question string
        answerOptions: [],    // all answer options
        answer: '',           // correct answer
        score: 0,             // current score
        show_result: false,   // indicates whether the final result should be displayed
        started: false
      };
  
      this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
      this.onRestart = this.onRestart.bind(this);
      this.onStart = this.onStart.bind(this);
      this.updateName = this.updateName.bind(this);
    }
  
    componentDidMount() {
      this.setState({
        question: quizQuestions[0].question,
        answerOptions: quizQuestions[0].answers
      });
    }
  
    handleAnswerSelected(event) {
      // Set user answer
      this.setState({ answer: event.currentTarget.value });

      // Increment score if answer was correct
      if (event.currentTarget.value == quizQuestions[this.state.counter].correct) {
          this.setState({ score: this.state.score + 1 })
      }

      // Move to next question if not the last
      if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        this.setState({ show_result: true })
      }
    }
  
    setNextQuestion() {
      const counter = this.state.counter + 1;
      const questionId = this.state.questionId + 1;
  
      // Set the state variables for the next question
      this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
      });
    }

    updateName(event) {
      this.setState({ name: event.currentTarget.value });
    }

    onStart() {
      if (this.state.name != '') {
        this.setState({ started: true })
        this.setState({ invalidName: false })
      } else {
        this.setState({ invalidName: true })
      }
    }

    onRestart() {
      // Reset all state variables to initial values
      this.setState({
        name: '',
        counter: 0,         
        questionId: 1,     
        question: quizQuestions[0].question,
        answerOptions: quizQuestions[0].answers,
        answer: '', 
        score: 0,
        show_result: false,
        started: false
      })
    }
  
    renderQuiz() {
      return (
        <QuizContent
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      );
    }

    renderResult() {
      db.addScore(this.state.name, this.state.score);

      return (
        <Result 
          quizResult={this.state.score} 
          questionTotal={quizQuestions.length}
          onRestart={this.onRestart} 
        />
      );
    }
  
    render() {
      return (
        <div>
          <h1 id="quiz-header">Take a quiz!</h1>
          <div className="quiz-container">
            {this.state.started ?
              (this.state.show_result ? this.renderResult() : this.renderQuiz())
              : <QuizStart 
                  name={this.state.name} 
                  invalid={this.state.invalidName} 
                  updateName={this.updateName} 
                  onStart={this.onStart} 
                />
            }
          </div>
        </div>
      );
    }
}

export default Quiz;