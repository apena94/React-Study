import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>
    );
}

// allows to have defauly val, and prevent redundant default value in div abov via '|| defVal'
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;