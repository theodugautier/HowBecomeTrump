import React, { Component } from 'react'
import Compteur from './components/compteur'
import './assets/css/App.css'
import classnames from 'classnames'
import numeral from 'numeral'


var compteurLocal = JSON.parse(localStorage.getItem('compteur')) || 0;
var pieceSecondsLocal = JSON.parse(localStorage.getItem('pieceSecond')) || 0;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      compteur: compteurLocal,
      pieceSecond: pieceSecondsLocal,
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    localStorage.setItem('compteur' , JSON.stringify(this.state.compteur));
    localStorage.setItem('pieceSecond' , JSON.stringify(this.state.pieceSecond));
    let pieceSecond = this.state.pieceSecond;
    let compteur = this.state.compteur;
    this.setState({compteur: compteur + pieceSecond});
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  initialClick(e) {
    const compteur = this.state.compteur;
    this.setState({
      compteur: compteur + 1
    });
  }

  onePieceClick(e) {
    const pieceSecond = this.state.pieceSecond;
    const compteur = this.state.compteur;

    if (compteur >= 80) {
      this.setState({
        compteur: compteur - 80,
        pieceSecond: pieceSecond + 1
      });
    }
  }

  fivePieceClick(e) {
    const pieceSecond = this.state.pieceSecond;
    const compteur = this.state.compteur;

    if (compteur >= 300) {
      this.setState({
        compteur: compteur - 300,
        pieceSecond: pieceSecond + 5
      });
    }
  }

  thirtyPieceClick(e) {
    const pieceSecond = this.state.pieceSecond;
    const compteur = this.state.compteur;

    if (compteur >= 5000) { // five thousand
      this.setState({
        compteur: compteur - 5000,
        pieceSecond: pieceSecond + 30
      });
    }
  }

  fiftyPieceClick(e) {
    const pieceSecond = this.state.pieceSecond;
    const compteur = this.state.compteur;

    if (compteur >= 10000) { // ten thousand
      this.setState({
        compteur: compteur - 10000,
        pieceSecond: pieceSecond + 50
      });
    }
  }

  _5000PieceClick(e) {
    const pieceSecond = this.state.pieceSecond;
    const compteur = this.state.compteur;

    if (compteur >= 1000000) { // One million
      this.setState({
        compteur: compteur - 1000000,
        pieceSecond: pieceSecond + 5000
      });
    }
  }

  _420000PieceClick(e) {
    const pieceSecond = this.state.pieceSecond;
    const compteur = this.state.compteur;

    if (compteur >= 1000000000) { // One Billion
      this.setState({
        compteur: compteur - 1000000000,
        pieceSecond: pieceSecond + 420000
      });
    }
  }

  _3000000PieceClick(e) {
    const pieceSecond = this.state.pieceSecond;
    const compteur = this.state.compteur;

    if (compteur >= 10000000000) { // ten Billion
      this.setState({
        compteur: compteur - 10000000000,
        pieceSecond: pieceSecond + 3000000
      });
    }
  }

  _reset(e) {
    this.setState({
      compteur: 0,
      pieceSecond: 0
    });
  }

  render() {
    return (
      <div className="App">
        <div className="reset" onClick={(e) => this._reset(e)}>Reset</div>
        <Compteur value={this.state.compteur} pieceSeconds={this.state.pieceSecond} />
        <p className="piecesecond">{numeral(this.state.pieceSecond).format('0,0')} $ per second</p>
        <div className="buttons">
          <div className="button">
            <p>It's free</p>
            <button className={classnames('btn-zero')} onClick={(e) => this.initialClick(e)}>Add 1 $</button>
          </div>
          <div className="button">
            <p>Cost : 80 $</p>
            <button className={classnames({'btn-Eighty': this.state.compteur >= 80})} onClick={(e) => this.onePieceClick(e)}>Add 1 $ per second</button>
          </div>
          <div className="button">
            <p>Cost : 300 $</p>
            <button className={classnames({'btn-300': this.state.compteur >= 300})} onClick={(e) => this.fivePieceClick(e)}>Add 5 $ per second</button>
          </div>
          <div className="button">
            <p>Cost : 5 000 $</p>
            <button className={classnames({'btn-5000': this.state.compteur >= 5000})} onClick={(e) => this.thirtyPieceClick(e)}>Add 30 $ per second</button>
          </div>
          <div className="button">
            <p>Cost : 10 000 $</p>
            <button className={classnames({'btn-10000': this.state.compteur >= 10000})} onClick={(e) => this.fiftyPieceClick(e)}>Add 50 $ per second</button>
          </div>
          <div className="button">
            <p>Cost : 1 million $</p>
            <button className={classnames({'btn-1000000': this.state.compteur >= 1000000})} onClick={(e) => this._5000PieceClick(e)}>Add 5 000 $ per second</button>
          </div>
          <div className="button">
            <p>Cost : 1 Billion $</p>
            <button className={classnames({'btn-1000000000': this.state.compteur >= 1000000000})} onClick={(e) => this._420000PieceClick(e)}>Add 420 000 $ per second</button>
          </div>
          <div className="button">
            <p>Cost : 10 Billions $</p>
            <button className={classnames({'btn-10000000000': this.state.compteur >= 10000000000})} onClick={(e) => this._3000000PieceClick(e)}>Add 3 000 000 $ per second</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
