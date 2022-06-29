import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            {/* <img src={props.image} alt="Ooops" /> */}
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyQ3Ez7fGNDmuULcJxaGc3CxZ5ohwAoFeGQ&usqp=CAU"
                alt="Ooops"
            />
            {props.message}
            <div>
                <span>Like</span> {props.likeCount || 0}
            </div>
        </div>
    );
};

export default Post;
