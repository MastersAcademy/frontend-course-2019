import React from 'react';
import Slider from 'rc-slider';
import Board from './Board';
import './App.css';
import 'rc-slider/assets/index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complexity: 0.55,
            size: 20,
            currentComplexity: 0,
            currentSize: 0,
            play: 0,
        };
    }

    handleComplexity(value) {
        this.setState(() => ({ complexity: value }));
    }

    handleSize(value) {
        this.setState(() => ({ size: value }));
    }

    start() {
        this.setState(
            ({ complexity, size, play }) => (
                { currentComplexity: complexity, currentSize: size, play: play + 1 }
            ),
        );
        console.log(this.renderBoard());
    }

    renderBoard() {
        if (this.state.play !== 0) {
            return <Board key={`play${this.state.play}`} size={this.state.currentSize} complexity={this.state.currentComplexity}/>;
        }
        return '';
    }

    render() {
        return (
            <div className="wrapper">
                <p className="slider-label">Complexity</p>
                <Slider className="slider" defaultValue={this.state.complexity} min={0.55} max={0.65} step={0.002} onChange={this.handleComplexity.bind(this)}/>
                <p className="slider-label">Size</p>
                <Slider className="slider" defaultValue={this.state.size} min={10} max={25} onChange={this.handleSize.bind(this)}/>
                <button onClick={this.start.bind(this)}>Play</button>
                {this.renderBoard()}
            </div>
        );
    }
}

export default App;
