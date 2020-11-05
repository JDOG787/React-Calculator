import React from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

class Claculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            problem: ""
        }
    }
    onClick = button => {
        if (button === "=") {
            this.claculate();
        } else if (button === "C") {
            this.reset();
        } else {
            this.setState({
                problem: this.state.problem + button
            });
        }
    }

    reset = () => {
        this.setState({
            problem: ""
        })
    }

    claculate = () => {
        try {
            this.setState({
                problem: (eval(this.state.problem) || "") + ""
            });
        } catch(e) {
            this.setState({
                problem: "Err"
            })
        }
    }

    render() {
        return(
            <div className="Calculator">
                <Display display={this.state.problem}/>
                <div className="btns">
                    <Button value="C" onClick={this.onClick}/>
                    <Button value="(" onClick={this.onClick}/>
                    <Button value=")" onClick={this.onClick}/>
                    <Button value="." onClick={this.onClick}/>
                    <Button value="9" onClick={this.onClick}/>
                    <Button value="8" onClick={this.onClick}/>
                    <Button value="7" onClick={this.onClick}/>
                    <Button value="+" onClick={this.onClick}/>
                    <Button value="6" onClick={this.onClick}/>
                    <Button value="5" onClick={this.onClick}/>
                    <Button value="4" onClick={this.onClick}/>
                    <Button value="-" onClick={this.onClick}/>
                    <Button value="3" onClick={this.onClick}/>
                    <Button value="2" onClick={this.onClick}/>
                    <Button value="1" onClick={this.onClick}/>
                    <Button value="*" onClick={this.onClick}/>
                    <Button value="0" onClick={this.onClick}/>
                    <Button value="=" isZero={true} onClick={this.onClick}/>    
                    <Button value="/" onClick={this.onClick}/>
                </div>
            </div>
        )
    }
}

export default Claculator;