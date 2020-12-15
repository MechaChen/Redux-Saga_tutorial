import * as types from '../types';

export function getUsers(users: any) {
    return {
        type: types.GET_USERS,
        payload: users,
    };
}
