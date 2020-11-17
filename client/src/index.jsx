import React from 'react';
import ReactDOM from 'react-dom';
import Window from './components/Window.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productId: this.props.id
        }
    }

    render() {
        return (
            <div>
                <Window id={this.state.productId} colorIndex={0} photoIndex={0} />
            </div>
        )
    }
}

ReactDOM.render(<App id={50} />, document.getElementById('app'));