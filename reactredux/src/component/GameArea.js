import React, { Component } from 'react';
import './GameArea.css';
import Map from './Map';

// INFO: game logics.
import GameMaster from '../object/GameMaster';
const gm = new GameMaster();

class GameArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: gm.dumpMap(),
      pieces: gm.dumpPieces(),
    };
  }

  render() {
    return (
      <div className="GameArea">
        <h1>Puzzle - Vanish By Full</h1>
        <div className="GameArea-putMap">
          <Map
            map={this.state.map}
            click={(position)=> {
              gm.add(0, position);
              this.setState({
                map: gm.dumpMap(),
                pieces: gm.dumpPieces(),
              });
            }}
            />
        </div>
        <div className="GameArea-pieceArea">
          {this.state.pieces.map((v, i)=> {
            return <div key={i} className="pieceArea">{v && <Map map={v._map} />}</div>
          })}
        </div>
      </div>
    );
  }
}

export default GameArea;
