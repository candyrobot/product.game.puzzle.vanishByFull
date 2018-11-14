import React, { Component } from 'react';
import './GameArea.css';

class GameArea extends Component {
  constructor(props) {
    super(props);
    this.state = { map: window.map.getMap() };
    window.gameArea = this;
  }

  render() {
    return (
      <div className="GameArea">
        <h1>Puzzle - Vanish By Full</h1>
        <div className="GameArea-putMap">
          <table>
            <tbody>
              {this.state.map.map((a, y) => {
                return <tr key={y}>
                  {a.map((v, x)=> {
                    return <td key={x}
                      data-x={x}
                      data-y={y}
                      data-has={this.state.map[y][x]}></td>
                  })}
                </tr>;
              })}
             </tbody>
          </table>
          <div className=""></div>
        </div>
        <table className="GameArea-pieceArea">
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default GameArea;
