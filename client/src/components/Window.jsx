import React from 'react';
import ColorSelector from './ColorSelector.jsx';

class Window extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorsAndPhotos: this.props.data
        }
    }

    render() {
        return (
            <div className="colorSelector" >
                <ColorSelector colorsAndPhotos={this.state.colorsAndPhotos} />
            </div>
        )
    }
}

export default Window;