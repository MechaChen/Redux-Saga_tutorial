import * as types from '@redux/types';

export interface I_User {
    id: number;
    name: string;
    company: {
        name: string;
        catchPhrase: string;
    };
}

export interface I_UsersState {
    users: I_User[];
}

const initialState = {
    users: [],
};

export default function usersReducer(state: I_UsersState = initialState, action: any) {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
}
