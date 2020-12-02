import React, { useState } from 'react';
import styled from 'styled-components';

const Img = styled.img`
    cursor: pointer;
    height: 75%;
    width: 840px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

// #ebeef0

class PhotoDisplay extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            image: this.props.image
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({ 
            image: nextProps.image
        });
    }
    
    render() {
        return (
            <Img src={this.state.image} />
        )
    }
}

export default PhotoDisplay;