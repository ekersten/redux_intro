import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length == 0 && <p>Enter an option</p>}
        {
            props.options.map((option, index) => (
                <Option
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
)

export default Options