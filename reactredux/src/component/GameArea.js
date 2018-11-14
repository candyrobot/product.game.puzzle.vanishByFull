import React, { Component } from 'react';
import './GameArea.css';
import Map from './Map';

import '../object/Array';
import PutMap from '../object/PutMap';
import PieceProvider from '../object/PieceProvider';

class GameArea extends Component {
  constructor(props) {
    super(props);
    this.state = { putMap: new PutMap() };
    window.gameArea = this;

    // INFO: stateに持たせないやり方もできる。ただしsetStateで気づかないはず
    this.pieceProvider = new PieceProvider();
  }

  render() {
    return (
      <div className="GameArea">
        <h1>Puzzle - Vanish By Full</h1>
        <div className="GameArea-putMap">
          <Map map={this.state.putMap.getMap()} />
        </div>
        <div className="GameArea-pieceArea">
          <div className="pieceArea"><Map map={this.pieceProvider.random()._map} /></div>
          <div className="pieceArea"><Map map={this.pieceProvider.random()._map} /></div>
          <div className="pieceArea"><Map map={this.pieceProvider.random()._map} /></div>
        </div>
      </div>
    );
  }
}

export default GameArea;
