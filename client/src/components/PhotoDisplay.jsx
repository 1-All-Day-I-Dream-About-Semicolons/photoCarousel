import React from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';

const appearDuration = 500;
const transitionName = `slide`;

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
            <CSSTransitionGroup
                transitionName={transitionName}
                transitionAppear={true}
                transitionAppearTimeout={appearDuration}>
                <Img src={this.state.image} ></Img>
            </CSSTransitionGroup>
        )
    }
}

export default PhotoDisplay;