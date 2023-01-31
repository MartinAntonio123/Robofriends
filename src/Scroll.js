import React from 'react';

const Scroll = props => {
    return (
        <div style={{overflow: 'scroll', height: '60rem' }}>
            {props.children}
        </div>
    );
};

export default Scroll;