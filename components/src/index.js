import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <h4>
                    Warning!
                </h4>
                 Are you sure you want to do this?
            </ApprovalCard>

            <ApprovalCard>
                {/* we just use component name we defined above, no selectors */}
                <CommentDetail author="Sam" timeAgo="Today at 2:00AM" message="Nice dude" commentImg={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 5:00PM" message="fantastic" commentImg={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 4:00AM" message="incredible post" commentImg={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));