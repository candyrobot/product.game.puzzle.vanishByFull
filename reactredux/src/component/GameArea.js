import React, { Component } from 'react';
import './GameArea.css';

class GameArea extends Component {
  render() {
    return (
      <div className="GameArea">
        <h1>Puzzle - Vanish By Full</h1>
        <table class="GameArea-putMap">
          {window.map.getMap().map((a, y) => {
            return <tr>
              {a.map((v, x)=> {
                return <td data-x={x} data-y={y}></td>
              })}
            </tr>;
          })}
        </table>
        <table class="GameArea-pieceArea">
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default GameArea;
