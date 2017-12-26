import React from 'react';
import './useroutput.css';

const useroutput = (props) => {

        return (
            <div class= { props.class }>
                <label>Username:</label> { props.username }
            </div>
        );

}

export default useroutput;
