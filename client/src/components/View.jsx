import React from 'react';
import IconList from './IconList.jsx';
import PhotoDisplay from './PhotoDisplay.jsx';
import styled from 'styled-components';

// #ebeef0

const LeftButton = styled.button`
    cursor: pointer;
    font-size: 20px;
    height: 60px;
    width: 60px;
    border: 2px solid black;
    background-color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    position: absolute;
    bottom: 400px;
    right: 90%;
`;

const RightButton = styled.button`
    cursor: pointer;
    font-size: 20px;
    height: 60px;
    width: 60px;
    border: 2px solid black;
    background-color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    position: absolute;
    bottom: 400px;
    right: 5%;
`;

const MainView = styled.div`
    position: relative;
`;

const CornerLinks = styled.div`
    display: flex;
    position: absolute;
    bottom: 90%;
    right: 80%;
    font-family: AdihausDIN, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: normal;

`;

const CornerLink = styled.span`
    font-family: Arial;
    text-decoration: underline;
    color: black;
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 25%;
    float: right;
    margin: 0px 10px;
    &:hover {
        background-color: black;
        color: white;
    }
`;

const CouponCode = styled.div`
    background-color: white;
    color: black;
    font-family: AdihausDIN, Helvetica, Arial, sans-serif;
    transform: rotate(-90deg);
    position: absolute;
    right: 2%;
    bottom: 85%;
    font-family: AdihausDIN, Helvetica, Arial, sans-serif;
`;

class View extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: this.props.photos.urls,
            photoIndex: 0
        }

        this.nextPhoto = this.nextPhoto.bind(this);
        this.previousPhoto = this.previousPhoto.bind(this);
        this.changePhoto = this.changePhoto.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            photos: nextProps.photos.urls,
            photoIndex: 0
        });
    }

    changePhoto (index) {
        this.setState({
            photoIndex: index
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
        var last = '←';
        var next = '→';
        return (
            <div>
                <MainView>
                    <CornerLinks>
                        <div>↰</div>
                        <CornerLink>BACK</CornerLink>
                        <div>        </div>
                        <CornerLink>Home</CornerLink>
                        <div>/</div>
                        <CornerLink>Men</CornerLink>
                        <div>/</div>
                        <CornerLink>Accessories</CornerLink>
                    </CornerLinks>
                    <CouponCode>-30% CODE GETSHOES</CouponCode>
                    <LeftButton onClick={this.previousPhoto} >{last}</LeftButton>
                    <RightButton onClick={this.nextPhoto} >{next}</RightButton>
                    <PhotoDisplay image={this.state.photos[this.state.photoIndex]} ></PhotoDisplay>
                    <IconList currentPhoto={this.state.photoIndex} changePhoto={this.changePhoto} photos={this.state.photos} ></IconList>
                </MainView>
            </div>
        )
    }
}

export default View;