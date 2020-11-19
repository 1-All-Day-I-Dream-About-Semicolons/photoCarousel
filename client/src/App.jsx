import React from 'react';
import ReactDOM from 'react-dom';
import Window from './components/Window.jsx';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            productId: this.props.id,
            isLoading: true
        }
        
        this.fetch = this.fetch.bind(this);
    }

    componentWillMount () {
        this.fetch(this.state.productId);
    }

    fetch (id) {
        axios.get(`/api/product/${id}`)
        .then((res) => {
            var data = res.data[0];
            console.log('successfully grabbed data');
            console.log(data);
            this.setState({
                productData: data,
                isLoading: false
            });
        })
        .catch((err) => {
            res.send(err);
        });
    }

    render() {
        let loading = this.state.isLoading;
        if (loading) {
            return <div>loading data...</div>
        } else {
            return (
                <div>
                    <Button/>
                    <Window data={this.state.productData.photos} />
                </div>
            )
        }
    }
}

ReactDOM.render(<App id={1} />, document.getElementById('app'));
// ReactDOM.render(<Button />, document.getElementById('app'));