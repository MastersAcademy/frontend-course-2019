import React from 'react';
import PropTypes from 'prop-types';

class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cell: props.cell, // [1 = bomb/0 = normal, display?]
            rowIndex: props.rowIndex,
            index: props.i,
            loosingCell: false,
        };
    }

    renderCell() {
        if (this.state.cell[1] !== 0) {
            if (this.state.cell[2] === 0) {
                return ' ';
            }
            return this.state.cell[2];
        }
        return ' ';
    }

    showCell() {
        this.setState(({ loosingCell }) => {
            const result = this.props.showCell(this.state.rowIndex, this.state.index, true);
            return { loosingCell: result !== null ? result : loosingCell };
        });
    }

    render() { return <td className={`${this.state.cell[1] === 2 && 'opened'} ${this.state.loosingCell && 'loosing-cell'}`} onClick={this.showCell.bind(this)}><p>{this.renderCell(this.state.Row)}</p></td>; }
}

Cell.propTypes = {
    cell: PropTypes.array.isRequired,
    rowIndex: PropTypes.number.isRequired,
    showCell: PropTypes.func.isRequired,
    i: PropTypes.number.isRequired,
};

export default Cell;
