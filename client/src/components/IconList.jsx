import React from 'react';

class IconList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: this.props.photos
        }
    }

    render() {
        return <div>IconList</div>
    }
}

export default IconList;