import React from 'react';
import ReactDOM from 'react-dom/client';
import faker from 'faker';
import CommentDetail from './CommentDetail.js'
import ApprovalCard from './ApprovalCard.js'




const App = () => {
    return (
        <div className="ui container comments">
           <ApprovalCard> <CommentDetail author="Jared" time ="5:01" comment = "good morning!" avatar = {faker.image.image()}/></ApprovalCard>
           <ApprovalCard><CommentDetail author="Luis"  time ="5:02" comment = "nice one!" avatar = {faker.image.image()} /></ApprovalCard>
           <ApprovalCard><CommentDetail author="Francesca" time ="5:03" comment = "helllloo!" avatar = {faker.image.image()} /></ApprovalCard>
        </div>


        
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

