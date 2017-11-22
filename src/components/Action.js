import React from 'react';

const Action = (props) => (
    <div>
        <button
            disabled={!props.hasOptions ? 'disabled' : undefined}
            onClick={props.handlePickOption}
        >
        What should I Do?
        </button>
    </div>
);

export default Action;