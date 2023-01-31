import './App.css';
import React, { Component } from 'react';

class Hello extends Component{
    render(){
        return(
            <div className='tc f1'>
                <h1>{this.props.greetings}</h1>
            </div>
        );
    }
}

export default Hello;