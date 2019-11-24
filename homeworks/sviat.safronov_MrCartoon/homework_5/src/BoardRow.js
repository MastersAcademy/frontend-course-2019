import React from 'react';
import Cell from './BoardCell';

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: props.row,
      index: props.i,
      board: props.board
    };
  }

  renderCells() {
    return this.state.cells.map((cell, i) => (<Cell key={'cell-' + this.state.index + '-' + i } i={i} rowIndex={this.state.index} cell={cell} board={this.state.board} showCell={this.props.showCell}/>))
  }

  render() {
    return (
      <tr>
        {this.renderCells()}
      </tr>
    )
  }
}

export default Row;
