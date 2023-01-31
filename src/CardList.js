import Card from './Card'
import React, { Component } from 'react';
//import React, { Fragment } from 'react';

class CardList extends Component{
    render(){
        const cardArray = this.props.robots.map(user => {
            return <Card key={user.id} id={user.id} name={user.username} email={user.email}/>
        });
        return(
            <div >
                {cardArray}
            </div>
        );
    }
}

export default CardList;