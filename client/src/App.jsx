import React from 'react';
import ReactDOM from 'react-dom';
import Window from './components/Window.jsx';
import axios from 'axios';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100%;
    height: auto;
`;

class App extends React.Component {
    constructor(props) {
        super(props);

        var pathname = window.location.pathname;
        pathname = pathname.split('/');
        var id = pathname[2];
        console.log(window.location);
        console.log(id);
        
        this.state = {
            productId: id,
            isLoading: true
        }
        
        this.fetch = this.fetch.bind(this);
    }

    componentDidMount () {
        this.fetch(this.state.productId);
    }

    fetch (id) {
        console.log('id in fetch:');
        console.log(id);
        axios.get(`${id}/photos`)
        .then((res) => {
            var data = res.data[0];
            console.log('data:');
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
                <AppContainer id={"AppContainer"} >
                    <Window data={this.state.productData.photos} />
                </AppContainer>
            )
        }
    }
}

ReactDOM.render(<App/>, document.getElementById('service1'));