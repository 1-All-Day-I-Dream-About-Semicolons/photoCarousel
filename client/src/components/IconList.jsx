import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
    cursor: pointer;
    height: 30px;
    width: 30px;
    border: 1px solid black;
    margin: 5px;
    display: inline-block;
    position: relative;
    bottom: 100px;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    ${props => (props.active) ? `border-bottom: 2px solid black;` : ``}
`;

const List = styled.div`
    background-color: white;
    height: 0px;
    text-align: center;
`;

class IconList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: this.props.photos,
            changePhoto: this.props.changePhoto,
            photoIndex: this.props.currentPhoto
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            photoIndex: nextProps.currentPhoto
        });
    }

    render() {
        return (
            <List>
                {this.props.photos.map((photo, index) => (
                    <Icon>
                        <Image active={index === this.state.photoIndex ? true : false}  src={photo} onClick={() => {
                            this.state.changePhoto(index);
                        }}></Image>
                    </Icon>
                ))}
            </List>
        )
    }
}

export default IconList;