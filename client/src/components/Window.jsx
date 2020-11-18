import React from 'react';
// import ColorSelector from './ColorSelector.jsx';
// import View from './View.jsx';
import axios from 'axios';


class Window extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productId: this.props.id,
            colorIndex: this.props.colorIndex,
            photoIndex: this.props.photoIndex,
            photos: []
        }

        this.nextPhoto = this.nextPhoto.bind(this);
        this.previousPhoto = this.previousPhoto.bind(this);
        this.fetch = this.fetch.bind(this);
    }

    componentDidMount () {
        this.fetch(this.state.productId);
    }

    fetch (id) {
        axios.get(`/api/product/${id}`)
        .then(res => {
            console.log('successful get request');
            var data = res.data[0];
            console.log('data:');
            console.log(data);
            this.setState({
                overallData: data,
                photos: data.photos[this.state.colorIndex].urls
            });
            console.log(`Window's state:`);
            console.log(this.state);
        })
        .catch((err) => {
            console.log('error');
            res.send(err);
        });
    }

    colorSelector () {
        var colors = this.state.overallData.photos;
        if (this.state.colorIndex === colors.length - 1) {
            this.setState({
                colorIndex: 0
            });
        } else {
            this.setState({
                colorIndex: this.state.colorIndex + 1
            });
        }
    }

    nextPhoto () {
        if (this.state.photoIndex === this.state.photos.length - 1) {
            this.setState({
                photoIndex: 0
            });
        } else {
            this.setState({
                photoIndex: this.state.photoIndex + 1
            });
        }
    }

    previousPhoto () {
        if (this.state.photoIndex === 0) {
            this.setState({
                photoIndex: this.state.photos.length - 1
            });
        } else {
            this.setState({
                photoIndex: this.state.photoIndex - 1
            });
        }
    }

    render() {
        var next = '>';
        var last = '<';
        return (
            <div>
                <div>
                    <button onClick={this.previousPhoto} >{last}</button>
                    <img src={this.state.photos[this.state.photoIndex]} ></img>
                    <button onClick={this.nextPhoto} >{next}</button>
                </div>
                <div>
                    <button onClick={this.colorSelector} >Next Color </button>
                </div>
            </div>
        )
    }
}

export default Window;