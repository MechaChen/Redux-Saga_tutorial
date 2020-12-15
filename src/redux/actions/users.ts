import * as types from '@redux/types';

export function getUsers(users: any) {
    return {
        type: types.GET_USERS,
        payload: users,
    };
}
