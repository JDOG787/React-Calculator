import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        return(
            <button className={"Button " + (this.props.isZero ? "zero" : "")} name={this.props.value} onClick={e => this.props.onClick(e.target.name)}>
                {this.props.value}
            </button>
        )
    }
}

export default Button;