import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">

            {/* we just use component name we defined above, no selectors */}
            <CommentDetail author="Sam" />
            <CommentDetail author="Alex"/>
            <CommentDetail author="Jane"/>

        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));