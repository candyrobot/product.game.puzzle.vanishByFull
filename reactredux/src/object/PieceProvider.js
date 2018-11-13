export default class PieceProvider {

  constructor() {
    this._pieces = [
      {
        show: this.show,
        _map:
        [
          [1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1],
          [1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1],
          [1,0],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1],
          [0,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [0,1],
          [1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,0],
          [1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1],
          [1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1],
          [1],
          [1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1,1],
          [1,0,0],
          [1,0,0],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1,1],
          [0,0,1],
          [0,0,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [0,0,1],
          [0,0,1],
          [1,1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,0,0],
          [1,0,0],
          [1,1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1,1],
          [1,1,1],
          [1,1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1,1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1],
          [1],
          [1],
          [1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1,1,1],
          [1,0,0,0],
          [1,0,0,0],
          [1,0,0,0],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1,1,1],
          [0,0,0,1],
          [0,0,0,1],
          [0,0,0,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [0,0,0,1],
          [0,0,0,1],
          [0,0,0,1],
          [1,1,1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,0,0,0],
          [1,0,0,0],
          [1,0,0,0],
          [1,1,1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1,1,1],
          [1,1,1,1],
          [1,1,1,1],
          [1,1,1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1,1,1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1],
          [1],
          [1],
          [1],
          [1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1,1,1,1],
          [1,0,0,0,0],
          [1,0,0,0,0],
          [1,0,0,0,0],
          [1,0,0,0,0],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,1,1,1,1],
          [0,0,0,0,1],
          [0,0,0,0,1],
          [0,0,0,0,1],
          [0,0,0,0,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [0,0,0,0,1],
          [0,0,0,0,1],
          [0,0,0,0,1],
          [0,0,0,0,1],
          [1,1,1,1,1],
        ]
      },
      {
        show: this.show,
        _map:
        [
          [1,0,0,0,0],
          [1,0,0,0,0],
          [1,0,0,0,0],
          [1,0,0,0,0],
          [1,1,1,1,1],
        ]
      },
      // {
      //   show: this.show,
      //   _map:
      //   [
      //     [1,1,1,1,1],
      //     [1,1,1,1,1],
      //     [1,1,1,1,1],
      //     [1,1,1,1,1],
      //     [1,1,1,1,1],
      //   ]
      // },
    ];
  }

  random() {
    return this._pieces[Math.floor(Math.random() * this._pieces.length)];
  }
}
