import React, { Component } from 'react';

class Card extends Component{
    constructor(props){
        super();
        this.searchChange = props.searchChange;
    }
    render(){
        return(
            <div className='pa2'>
                <input 
                    className='pa3' 
                    type='search' 
                    placeholder='Search robots'
                    onChange={this.searchChange}
                />
            </div>
        );
    }
}

export default Card;