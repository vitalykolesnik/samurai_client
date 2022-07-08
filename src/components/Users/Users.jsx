import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import Preloader from '../other/Preloader/Preloader';

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
    };

    return (
        <>
            {props.isLoading ? (
                <Preloader />
            ) : (
                <div className={s.container}>
                    <div>
                        <h3>Users</h3>
                    </div>
                    <div className={s.pagination}>
                        {pages.map((p) => {
                            return (
                                <span
                                    className={
                                        props.currentPage === p
                                            ? s.selectedPage
                                            : ''
                                    }
                                    onClick={() => onPageChanged(p)}
                                    key={p}
                                >
                                    {' '}
                                    {p}{' '}
                                </span>
                            );
                        })}
                    </div>
                    <div className={s.usersPage}>
                        {props.usersPage.users.map((u) => (
                            <User
                                id={u.id}
                                key={u.id}
                                name={u.name}
                                description={u.description}
                                subscribed={u.subscribed}
                                subscribe={props.subscribe}
                                unsubscribe={props.unsubscribe}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Users;