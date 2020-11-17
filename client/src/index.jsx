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

    componentWillMount () {
        axios.get(`/api/product/${this.state.productId}`)
        .then(res => {
            var data = res.data[0];
            // console.log(data);
            this.setState({
                id: data.id,
                name: data.name,
                color: 0,
                photo: 0,
                photos: data.photos[this.state.color].urls
            });
            console.log(this.state);
        });
    }

    render() {
        return (
            <div>
                <Window image={this.state.photos[this.state.photo]} />
                <button onClick={this.nextPhoto} >Next</button>
            </div>
        )
    }
}

ReactDOM.render(<App id={1} />, document.getElementById('app'));