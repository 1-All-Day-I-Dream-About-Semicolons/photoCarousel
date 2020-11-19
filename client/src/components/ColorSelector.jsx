import React from 'react';
import View from './View.jsx';

class ColorSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorsAndPhotos: this.props.colorsAndPhotos,
            colorIndex: 0
        }
    }

    render() {
        return (
            <div>
                <div>
                    <View photos={this.state.colorsAndPhotos[this.state.colorIndex]}/>
                </div>
                <div>
                    <div>{this.state.colorsAndPhotos.length} colors available:</div>
                    {this.state.colorsAndPhotos.map((color) => (
                        <button onClick={()=> {
                            console.log(color.color);
                            this.setState({
                                colorIndex: this.state.colorsAndPhotos.indexOf(color)
                            })
                        }}>{color.color}</button>
                    ))}
                </div>
            </div>
        )
    }
}

export default ColorSelector;