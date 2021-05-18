import React from 'react';
import * as db from '../../../firebase/datastore';

class Result extends React.Component  {
  constructor(props) {
      super(props);
      this.state = {
          scores: null, // object from database
          sortedScores: {} // object used for high score. Formatted as [name, score]
      }
  }
  componentDidMount() {
      db.fetchScores(this.fetchedScores); // call to database
  }

  // return scores from users
  fetchedScores = (user) => {
      this.setState({scores: user});
      this.reorganizeScores();
  }

  // Reorganizes scores for sorting
  reorganizeScores = () => {
      if (this.state.scores !== null){
          for (const [, value] of Object.entries(this.state.scores)){
              this.setState({ sortedScores: { ...this.state.sortedScores, [value.name] : value.score } })
          }
      }
  }

  render() {
      let totalScores = null
      //Sorts the highscores, displaying score as name: score
      if (this.state.sortedScores !== null){
          totalScores = Object.entries(this.state.sortedScores).sort((a,b) => b[1]-a[1]).map(value => {
              return(
                <tbody>
                  <tr>
                    <td>{value[0]}</td>
                    <td>{value[1]}</td>
                  </tr>
                </tbody>
              )
              }
          )
      }
      return (
          <div className='result'>
            <p>Your score: <strong>{this.props.quizResult}/{this.props.questionTotal}</strong> !</p>
            <button className='restart' onClick={this.props.onRestart}>Restart</button>

            <h2>Leaderboard</h2>
            <div className='scoreboard'>
              <table>
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Score</th>
                    </tr>
                </thead>
                {totalScores}
              </table>
            </div>
          </div>
      );
  }
}

export default Result;