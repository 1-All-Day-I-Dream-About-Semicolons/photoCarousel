import React from 'react';
import ReactDOM from 'react-dom';
import Window from './components/Window.jsx';
// import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productId: this.props.id
        }

        // this.fetch = this.fetch.bind(this);
    }

    // componentDidMount () {
    //     this.fetch(this.state.productId);
    // }

    // fetch (id) {
    //     axios.get(`/api/product/${id}`)
    //     .then((res) => {
    //         var data = res.data[0];
    //         this.setState({
    //             overallData: data,
    //         });
    //     })
    //     .catch((err) => {
    //         res.send(err);
    //     })
    // }

    render() {
        // console.log(`App's this.state.overallData:`);
        // console.log(this.state.overallData);
        console.log(`App's state:`);
        console.log(this.state);
        return (
            <div>
                <Window id={this.state.productId} />
            </div>
        )
    }
}

ReactDOM.render(<App id={1} />, document.getElementById('app'));