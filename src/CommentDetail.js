import react from 'react';
import faker from 'faker';

const CommentDetail =  (props) => {
return (
    <div className = "comment"> 
            <a href="/" className="avatar">
                <img alt = "avatar" src = {faker.image.image()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            </div>
            <div className = "metadata">
                <span className ="date"> {props.time}</span>
            </div>
            <div className= "text">
                {props.comment}
            </div>
            </div>
);
};

export default CommentDetail;