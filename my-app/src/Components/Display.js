import React, { Component } from 'react';

export default class Display extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Display">
            
            <ul>
            <li><b>Balls:</b> {this.props.balls}</li>
            <li><b>Strikes:</b>{this.props.strikes}</li>
            
            </ul>
            </div>
        )
    }

} 