import React from 'react';
import './userinput.css';

const userinput = (props) => {

    const style = {
        backgroundColor: 'lightgray',
        width: '50%',
        margin: 'auto',
        border: 'px solid green'
    };

        return (
            <div style={ style } className="UserInput">
                <label> User Name: </label>
                <input type = 'text' onChange={props.handle} value= {props.username} />
            </div>
        );

}

export default userinput;
