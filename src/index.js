import React from 'react';
import ReactDOM from 'react-dom/client';
import faker from 'faker';
import CommentDetail from './CommentDetail.js'



const App = () => {
    return (
        <div className="ui container comments">
         <CommentDetail author="Jared" time ="5:01" comment = "shut up " />
         <CommentDetail author="TJ"  time ="5:02" comment = "i hate stoners"/>
         <CommentDetail author="Francesca" time ="5:03" comment = "helllloo!"/>
        </div>

        
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

