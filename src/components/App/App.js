import React, { Component } from 'react';
import './App.css';
import randomizedCharList from '../../calc/chars'

const Button = ({name, click}) => {
  return (
    <button className='btn btn-lg' id={name} onClick={click}>{name.replace("-", " ")}</button>
  )
}

const GameCard = ({character, click}) => {
  return (
    <div class="col-xs-4 col-sm-3 col-md-2">
      <div className='card' id={character.index} value={character.val} onClick={click}>
        <img className="card-img" src={character.img_url} alt="character image" />
      </div>
    </div>
  )
}


class App extends Component {
  
  state = {
    gameStarted: false,
    gameCards: [],
    gamesWon: 0
  }

  getCharacters = () => {
    return new Promise((resolve, reject) => {
      randomizedCharList().then(data => {
        this.setState({
          gameCards: data
        })
        resolve(200);
      })
    })
  }

  handleStart = () => {
    if (!this.state.gameStarted) {
      this.state.gameStarted = true;
      this.getCharacters().then(resolve => {
        console.log(resolve);
      })
    }
  }

  handleReset = () => {
    this.setState({gameCards: []});
    this.setState({ gameStarted: false });

  }

  handleCardClick = () => {
    console.log('clicked');
  }


  render() {
    console.log('loaded');
    return (
      <div className="container">
        <div className="row">
          <Button name="Play-Game" click={() => this.handleStart()} />
          <Button name="Reset-Game" click={() => this.handleReset()} />
        </div>
        <div className="row" id="board">
          {this.state.gameCards.map((char) => <GameCard character={char} click={() => this.handleCardClick()} />)}
        </div>
      </div>
    )
  }
}

export default App;
