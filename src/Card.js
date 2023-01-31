import React, { Component } from 'react';
//import React, { Fragment } from 'react';

class Card extends Component{
    constructor(props){
        super();
        this.name = props.name;
        this.id = props.id;
        this.email = props.email;
    }
    render(){
        return(
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 sha5 tc'>
                <img src={`https://robohash.org/${this.id}?200x200`} alt='robot'/>
                <div>
                    <h2>{this.name}</h2>
                    <p>{this.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;