import React from 'react';
import IconList from './IconList.jsx';

class View extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: this.props.photos.urls,
            photoIndex: 0
        }

        this.nextPhoto = this.nextPhoto.bind(this);
        this.previousPhoto = this.previousPhoto.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            photos: nextProps.photos.urls,
            photoIndex: 0
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
        var last = '<';
        var next = '>';
        return (
            <div>
                <button onClick={this.previousPhoto} >{last}</button>
                <img src={this.state.photos[this.state.photoIndex]} ></img>
                <button onClick={this.nextPhoto} >{next}</button>
                {/* <IconList photos={this.state.photos} /> */}
            </div>
        )
    }
}

export default View;