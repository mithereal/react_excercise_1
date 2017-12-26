import React from 'react';
import './useroutput.css';

const useroutput = (props) => {

        return (
            <div class= { props.class }>
                <p><label>Username:</label> { props.username }</p>
                <p></p>
            </div>
        );

}

export default useroutput;
