import React, { Component } from 'react';
import CountUp from 'react-countup';

class Compteur extends Component {

  render() {

    return (
      <div className="compteur">
          <CountUp
            className="count"
            start={this.props.value - this.props.pieceSeconds}
            end={this.props.value}
            duration={1}
            useGrouping={true}
            useEasing={false}
            separator=" "
            decimal=","
            suffix=" $"
          />
      </div>
    );
  }
}

export default Compteur;
