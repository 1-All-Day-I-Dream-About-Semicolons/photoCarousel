import React from 'react';
import View from './View.jsx';
import IconList from './IconList.jsx';
import styled from 'styled-components';

const Icon = styled.div`
    cursor: pointer;
    height: 60px;
    width: 60px;
    padding: 5px;
    display: inline-block;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    border-top: 3px solid white;
    border-left: 3px solid white;
    border-right: 3px solid white;
    ${props => (props.active) ? `border-bottom: 3px solid black;` : `border-bottom: 3px solid white;`}
`;

const Selector = styled.div`
    font-family: AdihausDIN,Helvetica,Arial,sans-serif;
    font-weight: bold;
    position: relative;
    color: black;
    display: block;
    height: 100px;
    text-align: center;
    background-color: white;
    margin-top: 20px;
    height: 75px;
`;

const Colors = styled.div`
    font-family: AdihausDIN, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 15px;
    font-weight: bold;
    position: absolute;
    right: 60%;
    bottom: 50%;
`;

const Available = styled.div`
    font-family: AdihausDIN, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 15px;
    font-weight: bold;
    position: absolute;
    right: 60%;
    bottom: 30%;
`;

class ColorSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorsAndPhotos: this.props.colorsAndPhotos,
            colorIndex: 0
        }
    }

    render() {
        return (
            <div id="mainContainer" >
                <div id="view" >
                    <View photos={this.state.colorsAndPhotos[this.state.colorIndex]}/>
                </div>
                <Selector id="styledSelector" >
                    <Colors>{this.state.colorsAndPhotos.length} colors</Colors>
                    <Available>available</Available>
                    {this.state.colorsAndPhotos.map((color, index) => (
                        <Icon onClick={()=> {
                            this.setState({
                                colorIndex: this.state.colorsAndPhotos.indexOf(color)
                            })
                        }}>
                            <Image src={color.urls[0]} active={index === this.state.colorIndex ? true : false} ></Image>
                        </Icon>
                    ))}
                </Selector>
            </div>
        )
    }
}

export default ColorSelector;