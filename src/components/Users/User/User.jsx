import React from 'react';
import u from './User.module.css';
import icon from 'assets/image/user_Icon.png';

const User = (props) => {
    const onSbscribe = () => {
        props.subscribe(props.id);
    };

    const onUnsubscribe = () => {
        props.unsubscribe(props.id);
    };

    return (
        <div className={u.user}>
            <div className={u.userMainInfo}>
                <div>
                    {props.subscribed ? (
                        <button onClick={onUnsubscribe}>UNS</button>
                    ) : (
                        <button onClick={onSbscribe}>SUB</button>
                    )}
                </div>
                <img src={icon} alt="ooops" />
                <div>{props.name}</div>
            </div>
            <div>{props.description}</div>
        </div>
    );
};

export default User;