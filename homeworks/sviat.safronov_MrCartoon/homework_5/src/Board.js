import React from 'react';
import Row from './BoardRow'

class Board extends React.Component {
  constructor(props) {
    super(props);

    const board = Array.from({length: props.size}, () => Array.from({length: props.size}, () => [Math.round(Math.random() * props.complexity), 0, null]));
    board.forEach((row, rowI) => row.forEach((cell, cellI) => board[rowI][cellI][2] = this.renderCell({cell, rowI, cellI, board})))
    let bombsCount = 0;
    board.forEach(row => bombsCount = bombsCount + row.filter(cell => cell[0] === 1).length)
    this.state = {board, gameFinished: false, gameLost: false, bombsCount, openedCount: 0};
  }

  renderCell({cell, board, rowI, cellI}) {
    if(cell[0] === 1) {
      return '*'
    } else {
      const variety = [
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1],
        [-1, 0],
        [-1, -1],
        [0, -1],
        [1, -1]
      ]
      return variety.map(diff => ((board[rowI + diff[0]] || [])[cellI + diff[1]] || [])[0] || 0).reduce((a, b) => a + b, 0)
    }
  }

  showCell(rowIndex, cellIndex, click, cells) {
    if(!this.state.gameFinished) {
      const cell = (this.state.board[rowIndex] || [])[cellIndex]
      if(click) {
        if(cell[0] === 1) {
          // oh no you clicked on bomb
          this.setState(({board}) => {
            board.forEach((row, rI) => {
              row.forEach((_cell, cI) => { if(board[rI][cI][1] === 0) board[rI][cI][1] = 1 })
            })
            return {board, gameFinished: true, gameLost: true};
          })
          return true;
        } else {
          this.setState(({board, openedCount, bombsCount}) => {
            const justOpened = this.showCell(rowIndex, cellIndex, false, [])
            justOpened.forEach(idx => board[idx[0]][idx[1]][1] = 2)
            return {board, openedCount: openedCount + justOpened.length, gameFinished: (this.props.size ** 2) - bombsCount === openedCount + justOpened.length};
          })
        }
        return false;
      } else {
        if(cells.length > this.props.size ** 2) {
          throw 'loop';
        }
        if(!cell || (cell && (cell[0] === 1 || cells.filter(c => c[0] === rowIndex && c[1] === cellIndex).length !== 0))) {
          return cells;
        } else {
            const variety = [
              [1,0],
              [0,1],
              [-1, 0],
              [0, -1]
            ]
          let newCells = cells.concat([[rowIndex, cellIndex]])
          if(cell[2] === 0) {
            variety.forEach(diff => {
              newCells = this.showCell(rowIndex + diff[0], cellIndex + diff[1], false, newCells)
            })
          }
          return newCells
        }
      }
    } else {
      return null;
    }
  }

  renderRows() {
    return this.state.board.map((row, i) => (<Row key={'row-' + i} i={i} row={row} board={this.state.board} showCell={this.showCell.bind(this)}/>))
  }

  renderResults() {
    if(this.state.gameFinished) {
      if(this.state.gameLost) {
        return <p>You lost!</p>
      } else {
        return <p>You won</p>
      }
    }
  }

  render() {
    return (
      <div>
        {this.renderResults()}
        <table>
          {this.renderRows()}
        </table>
      </div>
    )
  }
}

export default Board;
