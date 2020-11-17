import React from 'react';
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
        .then((res) => {
            var data = res.data[0];
            console.log('data:');
            console.log(data);
            this.setState({
                overallData: data,
                photos: data.photos[this.state.colorIndex].urls
            });
        })
        .catch((err) => {
            res.send(err);
        });
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
                <button onClick={this.previousPhoto} >{last}</button>
                <img src={this.state.photos[this.state.photoIndex]} ></img>
                <button onClick={this.nextPhoto} >{next}</button>
            </div>
        )
    }
}

export default Window;