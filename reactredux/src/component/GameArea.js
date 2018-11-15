import React, { Component } from 'react';
import './GameArea.css';
import Map from './Map';

import '../object/Array';
import PutMap from '../object/PutMap';
import PieceProvider from '../object/PieceProvider';
import PieceStocker from '../object/PieceStocker';

class GameArea extends Component {
  constructor(props) {
    super(props);

    // INFO: stateに持たせないやり方もできる。ただしsetStateで気づかないはず
    this.pieceProvider = new PieceProvider();

    var putMap = new PutMap();

    var pieceStocker = new PieceStocker(3);
    pieceStocker.fill(()=> this.pieceProvider.random());

    this.state = {
      putMap: putMap,
      pieceStocker: pieceStocker,
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

              var map = this.state.pieceStocker.get(0)._map;
              if(this.state.putMap.isOverBeyondMap(map, position))
                console.warn('over beyond the map!');
              else if(this.state.putMap.isAlreadyExist(map, position))
                console.warn('is already exist!');
              else {
                this.state.pieceStocker.remove(0);
                this.state.putMap.add(map, position);
              }

              this.setState({
                putMap: this.state.putMap,
                pieceStocker: this.state.pieceStocker
              });
            }}
            />
        </div>
        <div className="GameArea-pieceArea">
          {this.state.pieceStocker.getAll().map((v, i)=> {
            return <div key={i} className="pieceArea">{v && <Map map={v._map} />}</div>
          })}
        </div>
      </div>
    );
  }
}

export default GameArea;
