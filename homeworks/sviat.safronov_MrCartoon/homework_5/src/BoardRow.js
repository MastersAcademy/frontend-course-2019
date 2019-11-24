import React from 'react';
import PropTypes from 'prop-types';
import Cell from './BoardCell';

class Row extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: props.row,
            index: props.i,
        };
    }

    renderCells() {
        return this.state.cells.map((cell, i) => (<Cell key={`cell-${this.state.index}-${i}` } i={i} rowIndex={this.state.index} cell={cell} showCell={this.props.showCell}/>));
    }

    render() {
        return (
            <tr>
                {this.renderCells()}
            </tr>
        );
    }
}

Row.propTypes = {
    row: PropTypes.array.isRequired,
    i: PropTypes.number.isRequired,
    showCell: PropTypes.func.isRequired,
};

export default Row;
