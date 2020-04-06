import React from 'react';

const scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll', marginTop: '.8em', borderTop: '5px solid rgba(0,0,0,0.2)', height: '75vh'}}>
            {props.children}
        </div>
    );
}

export default scroll;