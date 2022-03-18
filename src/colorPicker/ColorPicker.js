import React, { Component } from "react";
import './ColorPicker.css'

class ColorPicker extends React.Component {
    constructor() {
        super();
        this.state = {
            color1: '#ffffff',
            color2: '#619d34',
            color3: '#000000',
            breakpoint1: '0',
            breakpoint2: '50',
            breakpoint3: '100',
            rotation: '88'
        }
    }

    onChange1(event) {
        this.setState({
            color1: event.target.value
        })
    }

    onChange2(event) {
        this.setState({
            color2: event.target.value
        })
    }

    onChange3(event) {
        this.setState({
            color3: event.target.value
        })
    }

    changeBreakpoint1(event) {
        this.setState({
            breakpoint1: event.target.value
        })
    }

    changeBreakpoint2(event) {
        this.setState({
            breakpoint2: event.target.value
        })
    }

    changeBreakpoint3(event) {
        this.setState({
            breakpoint3: event.target.value
        })
    }

    changeRotation(event) {
        this.setState({
            rotation: event.target.value
        })
    }

    render() {
        return(
            <div className="container">
                <h1>CSS GRADIENT</h1>
                <div className="box">
                    <span>Color 1</span>
                    <div>
                        <input value={this.state.color1} type="color" onChange={this.onChange1.bind(this)}></input>
                    </div>

                    <div>
                        <label>Breakpoint</label>
                        <input value={this.state.breakpoint1} type="number" onChange={this.changeBreakpoint1.bind(this)}></input>
                    </div>
                </div>

                <div className="box">
                    <span>Color 2</span>
                    <div>
                        <input value={this.state.color2} type="color" onChange={this.onChange2.bind(this)}></input>
                    </div>

                    <div>
                        <label>Breakpoint</label>
                        <input value={this.state.breakpoint2} type="number" onChange={this.changeBreakpoint2.bind(this)}></input>
                    </div>
                </div> 

                <div className="box">
                    <span>Color 3</span>
                    <div>
                        <input value={this.state.color3} type="color" onChange={this.onChange3.bind(this)}></input>
                    </div>

                    <div>
                        <label>Breakpoint</label>
                        <input value={this.state.breakpoint3} type="number" onChange={this.changeBreakpoint3.bind(this)}></input>
                    </div>
                </div>

                <div className="box">
                    <label>Rotation</label>
                    <input value={this.state.rotation} type='range' onChange={this.changeRotation.bind(this)}></input>
                </div>

                <div className="box2" style={{background: `linear-gradient(${this.state.rotation + 'deg'}, ${this.state.color1} ${this.state.breakpoint1 + '%'}, ${this.state.color2} ${this.state.breakpoint2 + '%'}, ${this.state.color3} ${this.state.breakpoint3 + '%'})`}}>
                </div>

            </div>
            
        ); 
    }
    
}

export default ColorPicker;