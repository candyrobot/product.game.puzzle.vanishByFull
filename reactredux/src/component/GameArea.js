import React, { Component } from 'react';
import './GameArea.css';
import Map from './Map';

import '../object/Array';
import PutMap from '../object/PutMap';
import PieceProvider from '../object/PieceProvider';

class GameArea extends Component {
  constructor(props) {
    super(props);

    // INFO: stateに持たせないやり方もできる。ただしsetStateで気づかないはず
    this.pieceProvider = new PieceProvider();

    this.state = {
      putMap: new PutMap(),
      pieceStockers: [
        this.pieceProvider.random(),
        this.pieceProvider.random(),
        this.pieceProvider.random(),
      ],
    };
  }

  render() {
    return (
      <div className="GameArea">
        <h1>Puzzle - Vanish By Full</h1>
        <div className="GameArea-putMap">
          <Map
            map={this.state.putMap.getMap()}
            click={(position)=> {
              var map = this.state.pieceStockers.pop()._map;
              this.state.pieceStockers.push(this.pieceProvider.random());
              this.state.putMap.checkAndAdd(map, position);
              this.setState({
                putMap: this.state.putMap,
                pieceStockers: this.state.pieceStockers
              });
            }}
            />
        </div>
        <div className="GameArea-pieceArea">
          <div className="pieceArea"><Map map={this.state.pieceStockers[0]._map} /></div>
          <div className="pieceArea"><Map map={this.state.pieceStockers[1]._map} /></div>
          <div className="pieceArea"><Map map={this.state.pieceStockers[2]._map} /></div>
        </div>
      </div>
    );
  }
}

export default GameArea;
