import { combineReducers } from 'redux';
import usersReducer from './users';

const rootReducer = combineReducers({
    usersReducer,
});

export default rootReducer;
export type I_RootState = ReturnType<typeof rootReducer>;
