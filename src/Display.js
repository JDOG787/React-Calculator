import React from 'react';
import './Display.css'

class Dsiplay extends React.Component {
    render() {
        return(
            <div className="Display">
                {this.props.display}
            </div>
        )
    }
}

export default Dsiplay;