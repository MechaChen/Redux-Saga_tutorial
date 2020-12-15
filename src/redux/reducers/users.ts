import * as types from '../types';

const initialState = {
    users: [],
};

export default function users(state = initialState, action: any) {
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
