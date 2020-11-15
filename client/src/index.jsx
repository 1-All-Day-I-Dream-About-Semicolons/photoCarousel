import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            products: []
        }

        this.fetch = this.fetch.bind(this);
    }

    componentDidMount() {
        this.fetch();
    }

    fetch () {
        axios.get('/products')
        .then((res) => {
            const data = res.data;
            this.setState({
                products: data
            });
        });
    }

    render() {
        return <div>Hello World</div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));