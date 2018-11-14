import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.map.map((a, y) => {
            return <tr key={y}>
              {a.map((v, x)=> {
                return <td key={x}
                  data-x={x}
                  data-y={y}
                  data-has={this.props.map[y][x]}></td>
              })}
            </tr>;
          })}
         </tbody>
      </table>
    );
  }
}

export default Map;
