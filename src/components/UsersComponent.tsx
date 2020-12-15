import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '@redux/actions/users';
import { I_User } from '@redux/reducers/users';
import Card from '@components/CardComponent';
import { I_RootState } from '@redux/reducers';

const tempUsers: I_User[] = [
    {
        id: 1,
        name: 'Karina',
        company: {
            name: 'SM',
            catchPhrase: 'Culture First, Economy Next',
        },
    },
];

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: I_RootState) => state.usersReducer.users);

    useEffect(() => {
        dispatch(getUsers(tempUsers));
    }, []);

    return (
        <>
            {users.length > 0 ? (
                users.map((user: I_User) => <Card key={user.id} user={user} />)
            ) : (
                <p>No users available!!</p>
            )}
        </>
    );
};

export default Users;
