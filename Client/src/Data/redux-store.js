import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import settingsReducer from "./settings-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    profileReducer,
    messagesReducer,
    settingsReducer,
    usersReducer
});

const store = createStore(reducers);

export default store;
